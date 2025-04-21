import React, { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '../components/ui/select';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Download, FileText, ImageIcon } from 'lucide-react';

// Updated material densities and prices including plastic
const materials = { Aluminum: 2.7, Steel: 7.85, Copper: 8.96, Brass: 8.5, Plastic: 1.2 };
const prices = { Aluminum: 3.2, Steel: 1.5, Copper: 6.0, Brass: 4.8, Plastic: 2.5 };

const Calculate = () => {
  const [material, setMaterial] = useState('Aluminum');
  const [shape, setShape] = useState('Cuboid');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [diameter, setDiameter] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const density = materials[material];
    const pricePerKg = prices[material];
    let volume = 0;

    if (shape === 'Cuboid') {
      volume = (length * width * height) / 1000;
    } else if (shape === 'Cylinder') {
      const radius = diameter / 2;
      volume = (Math.PI * radius * radius * height) / 1000;
    } else if (shape === 'Cone') {
      // Formula for cone volume
      volume = (Math.PI * Math.pow(diameter / 2, 2) * height) / 3 / 1000;
    } else if (shape === 'Prism') {
      // Formula for prism volume (using length, width, height)
      volume = (length * width * height) / 1000;
    } else if (shape === 'Sphere') {
      // Formula for sphere volume
      volume = (4 / 3) * Math.PI * Math.pow(diameter / 2, 3) / 1000;
    }

    const weight = volume * density;
    const totalWeight = weight * quantity;
    const cost = totalWeight * pricePerKg;

    setResult({
      weight: totalWeight.toFixed(2),
      cost: cost.toFixed(2),
    });
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text(`Total Weight: ${result.weight} kg`, 10, 10);
    doc.text(`Estimated Cost: ₹${result.cost}`, 10, 20);
    doc.save('material_estimate.pdf');
  };

  const downloadTXT = () => {
    const text = `Total Weight: ${result.weight} kg\nEstimated Cost: ₹${result.cost}`;
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'material_estimate.txt';
    link.click();
  };

  const downloadPNG = () => {
    html2canvas(document.querySelector('#calculate-content')).then((canvas) => {
      const img = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = img;
      link.download = 'material_estimate.png';
      link.click();
    });
  };

  return (
    <div className="main-container">
      <Card className="card" id="calculate-content">
        <CardContent className="card-content">
          <h2 className="text-xl font-bold mb-4">Underground Machine Part Estimator</h2>

          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="col-span-2">
              <label>Material</label>
              <Select value={material} onValueChange={setMaterial}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Material" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(materials).map((mat) => (
                    <SelectItem key={mat} value={mat}>
                      {mat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="col-span-2">
              <label>Shape</label>
              <Select value={shape} onValueChange={setShape}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Shape" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Cuboid">Cuboid</SelectItem>
                  <SelectItem value="Cylinder">Cylinder</SelectItem>
                  <SelectItem value="Cone">Cone</SelectItem>
                  <SelectItem value="Prism">Prism</SelectItem>
                  <SelectItem value="Sphere">Sphere</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {shape === 'Cuboid' && (
              <>
                <div className="grid gap-2">
                  <label>Length (cm)</label>
                  <Input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
                </div>
                <div className="grid gap-2">
                  <label>Width (cm)</label>
                  <Input type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
                </div>
                <div className="grid gap-2 col-span-2">
                  <label>Height (cm)</label>
                  <Input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
              </>
            )}

            {shape === 'Cylinder' && (
              <>
                <div className="grid gap-2 col-span-2">
                  <label>Diameter (cm)</label>
                  <Input type="number" value={diameter} onChange={(e) => setDiameter(e.target.value)} />
                </div>
                <div className="grid gap-2 col-span-2">
                  <label>Height (cm)</label>
                  <Input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
              </>
            )}

            {shape === 'Cone' && (
              <>
                <div className="grid gap-2 col-span-2">
                  <label>Diameter (cm)</label>
                  <Input type="number" value={diameter} onChange={(e) => setDiameter(e.target.value)} />
                </div>
                <div className="grid gap-2 col-span-2">
                  <label>Height (cm)</label>
                  <Input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
              </>
            )}

            {shape === 'Prism' && (
              <>
                <div className="grid gap-2">
                  <label>Length (cm)</label>
                  <Input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
                </div>
                <div className="grid gap-2">
                  <label>Width (cm)</label>
                  <Input type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
                </div>
                <div className="grid gap-2 col-span-2">
                  <label>Height (cm)</label>
                  <Input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
              </>
            )}

            {shape === 'Sphere' && (
              <>
                <div className="grid gap-2 col-span-2">
                  <label>Diameter (cm)</label>
                  <Input type="number" value={diameter} onChange={(e) => setDiameter(e.target.value)} />
                </div>
              </>
            )}

            <div className="grid gap-2 col-span-2">
              <label>Quantity</label>
              <Input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </div>
          </div>

          <Button onClick={calculate} className="w-full mt-4">
            Calculate
          </Button>

          {result && (
            <div className="mt-4 text-center">
              <p>Total Weight: {result.weight} kg</p>
              <p>Estimated Cost: ₹{result.cost}</p>
              <div className="flex justify-center gap-4 mt-4">
                <Button onClick={downloadPDF} variant="outline">
                  <Download className="mr-2 h-5 w-5" /> PDF
                </Button>
                <Button onClick={downloadTXT} variant="outline">
                  <FileText className="mr-2 h-5 w-5" /> TXT
                </Button>
                <Button onClick={downloadPNG} variant="outline">
                  <ImageIcon className="mr-2 h-5 w-5" /> PNG
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Calculate;
