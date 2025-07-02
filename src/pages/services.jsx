
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Leak Detection & Repair",
      img: "https://media.istockphoto.com/id/2158664572/photo/essential-steps-for-handyman-ceiling-leak-fixes.jpg?s=612x612&w=0&k=20&c=kUEJogNSH64sW8qCwxRDcI7tE1cB45FPvn4xvkHV0oc=",
      desc: "Using advanced tools to locate and repair hidden leaks before serious damage occurs."
    },
    {
      title: "Drain Cleaning",
      img: "https://media.istockphoto.com/id/172441142/photo/man-with-ground-open-unblocking-a-drain-with-a-tool.jpg?s=612x612&w=0&k=20&c=-4sj3SzefhNhSGbbf3SmDpOeD0hqUhcUZssW2x0P5GY=",
      desc: "Snaking and hydro‑jetting to remove clogs and restore smooth drainage."
    },
    {
      title: "Toilet Installation & Repair",
      img: "https://media.istockphoto.com/id/1338465997/photo/man-worker-repairing-with-toilet-tank.jpg?s=612x612&w=0&k=20&c=Spc0--66EGnuT9G8btrLuiN02PzY8U5WSQbfJhta7Hw=",
      desc: "From installing new toilets to fixing leaks, clogs, and flushing issues."
    },
    {
      title: "Water Heater Service",
      img: "https://media.istockphoto.com/id/1298386903/photo/man-in-bathroom-repairing-electric-boiler.jpg?s=612x612&w=0&k=20&c=MZM7p8GirOE_TQyfpgYeuMyIRicTOVv8-8JiQD8YOEo=",
      desc: "Repair, replace or maintain water heaters to ensure reliable hot water supply."
    },
    {
      title: "Pipe Repair & Repiping",
      img: "https://media.istockphoto.com/id/914070462/photo/the-worker-performs-the-connections-of-polypropylene-plumbing-pipes.jpg?s=612x612&w=0&k=20&c=ZocVSN1Xg8pq8cqJvpElffbEDgs9aZ5uLHMuM8Yq8Fo=",
      desc: "Fixing corroded or damaged pipes and full repiping services when required."
    },
    {
      title: "Sewer Line Inspection (CCTV)",
      img: "https://media.istockphoto.com/id/951866060/photo/pipe-connection-working.jpg?s=612x612&w=0&k=20&c=n7Sx0wBfisO7E25SDyGveojuY5z8HZJPsEdDNGUJyqM=",
      desc: "Non‑invasive inspections with sewer‑camera tech to detect blockages and damage."  // CCTV drain cameras :contentReference[oaicite:2]{index=2}
    },
    {
      title: "Backflow Prevention",
      img: "https://media.istockphoto.com/id/1023016836/photo/blue-pvc-water-pipe-installation-from-pump-to-tank-with-ball-valve.jpg?s=612x612&w=0&k=20&c=e6ZvCubazYCnYDe7MDsrVzakl5W-nHUvN5PDAiHtNE8=",
      desc: "Install and test devices to stop contaminated water from reversing into clean supply."  // Backflow prevention :contentReference[oaicite:3]{index=3}
    },
    {
      title: "Emergency Plumbing Services",
      img: "https://media.istockphoto.com/id/1350033407/photo/drainpipe-in-the-bathroom.jpg?s=612x612&w=0&k=20&c=dTiGfl1EI4tcKrX8Mctd1vyVtc-cemDEbrEMsH-ar_U=",
      desc: "24/7 response for burst pipes, major leaks, sewer backups and other urgent situations." // Emergencies :contentReference[oaicite:4]{index=4}
    },
    {
      title: "Fixture Installation & Repair",
      img: "https://media.istockphoto.com/id/1306011895/photo/plumber-hand-holds-a-new-faucet-for-installing-into-the-kitchen-sink.jpg?s=612x612&w=0&k=20&c=VlOrWXiVD-9oNn6v287uKWV11tT3WVvTmlC9Vf9p2Og=",
      desc: "Installing/upgrading sinks, faucets, showers, tubs and other fixtures."
    },
    {
      title: "Gas Line Services",
      img: "https://media.istockphoto.com/id/1312405670/photo/oil-or-gas-transportation-with-blue-gas-or-pipe-line-valves-on-soil-and-sunrise-background.jpg?s=612x612&w=0&k=20&c=fWLQ8A1oC1_MRweaasDK-uMp433d9joVixs-MvcRTqc=",
      desc: "Safe installation and repair of gas piping for heaters, stoves, and other appliances."
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Our Plumbing Services</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {services.map((svc, idx) => (
          <div className="col" key={idx}>
            <div className="card h-100 shadow-sm">
              <img src={svc.img} className="card-img-top" alt={svc.title} />
              <div className="card-body">
                <h5 className="card-title">{svc.title}</h5>
                <p className="card-text">{svc.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
