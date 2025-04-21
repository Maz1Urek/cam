import React from 'react';

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 text-center text-white pt-20">
        <h1 className="text-5xl font-bold mb-4">CAM Material Estimator</h1>
        <p className="text-xl mb-8">
          The CAM Material Estimator is a comprehensive tool designed to assist engineers and manufacturers in estimating the weight and cost of materials used in CNC machining. By inputting precise dimensions and selecting the appropriate material type, users can obtain accurate calculations for both weight and cost, facilitating informed decision-making in the manufacturing process.
        </p>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          This estimator takes into account various factors that influence material costs, including the type of material, dimensions, and machining processes. It provides a detailed breakdown of costs, encompassing material expenses, machining time, tooling, labor, and overhead, ensuring a comprehensive understanding of the total cost involved in a project.
        </p>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mt-4">
          Whether you're working on a prototype or a large-scale production run, the CAM Material Estimator offers valuable insights to optimize material usage, reduce waste, and enhance cost efficiency. It's an indispensable tool for professionals aiming to streamline their manufacturing processes and achieve cost-effective results.
        </p>
      </div>
    </div>
  );
};

export default Home;
