import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Services = () => {
  const [showModalIndex, setShowModalIndex] = useState(null); // null means no modal open

  const services = [
    {
      title: "Leak Detection & Repair",
      img: "https://media.istockphoto.com/id/2158664572/photo/essential-steps-for-handyman-ceiling-leak-fixes.jpg?s=612x612&w=0&k=20&c=kUEJogNSH64sW8qCwxRDcI7tE1cB45FPvn4xvkHV0oc=",
      desc: "Using advanced tools to locate and repair hidden leaks before serious damage occurs.",
      context: `Our Leak Detection & Repair service uses non‑invasive, state‑of‑the‑art equipment—including acoustic sensors, thermal cameras, and tracer gas—to precisely locate hidden leaks behind walls or under slabs with minimal disruption. Early detection not only prevents harmful mold growth, structural damage, and skyrocketing water bills by addressing issues before they escalate, but also preserves your home’s integrity and value while conserving water and avoiding invasive excavation :contentReference[oaicite:1]{index=1}.`
    },
    {
      title: "Drain Cleaning",
      img: "https://media.istockphoto.com/id/172441142/photo/man-with-ground-open-unblocking-a-drain-with-a-tool.jpg?s=612x612&w=0&k=20&c=-4sj3SzefhNhSGbbf3SmDpOeD0hqUhcUZssW2x0P5GY=",
      desc: "Snaking and hydro‑jetting to remove clogs and restore smooth drainage.",
      context: `Our Drain Cleaning service combines rod‑snaking with high‑pressure hydro‑jetting—the latter blasting away stubborn clogs, grease, mineral buildup, and even tree roots. Hydro‑jetting not only clears obstructions thoroughly but also scrubs pipe walls clean, preventing recurring issues while being eco‑friendly, fast, and pipe‑safe :contentReference[oaicite:2]{index=2}.`
    },
    {
      title: "Toilet Installation & Repair",
      img: "https://media.istockphoto.com/id/1338465997/photo/man-worker-repairing-with-toilet-tank.jpg?s=612x612&w=0&k=20&c=Spc0--66EGnuT9G8btrLuiN02PzY8U5WSQbfJhta7Hw=",
      desc: "From installing new toilets to fixing leaks, clogs, and flushing issues.",
      context: `We offer professional toilet installation and repair services, covering everything from fitting modern water‑efficient models to diagnosing and fixing leaks, clogs, runny flushes, and faulty valves. Our certified technicians ensure secure plumbing connections, proper sealing, and optimal flushing performance—helping you stay compliant with local codes, conserve water, and enjoy quiet, trouble‑free operation.`
    },
    {
      title: "Water Heater Service",
      img: "https://media.istockphoto.com/id/1298386903/photo/man-in-bathroom-repairing-electric-boiler.jpg?s=612x612&w=0&k=20&c=MZM7p8GirOE_TQyfpgYeuMyIRicTOVv8-8JiQD8YOEo=",
      desc: "Repair, replace or maintain water heaters to ensure reliable hot water supply.",
      context: `Our Water Heater Service includes full-spectrum care—ranging from annual maintenance (flushing sediments, inspecting valves) to partial or full unit replacements, plus handling gas or electric water heater repairs. Regular servicing boosts energy efficiency, prevents unexpected cold showers, and extends the lifespan of your system.`
    },
    {
      title: "Pipe Repair & Repiping",
      img: "https://media.istockphoto.com/id/914070462/photo/the-worker-performs-the-connections-of-polypropylene-plumbing-pipes.jpg?s=612x612&w=0&k=20&c=ZocVSN1Xg8pq8cqJvpElffbEDgs9aZ5uLHMuM8Yq8Fo=",
      desc: "Fixing corroded or damaged pipes and full repiping services when required.",
      context: `We specialize in repairing damaged pipes and performing partial or full repiping with modern materials that resist corrosion and leaks. Our expert approach minimizes disruption—avoiding unnecessary demolition—and ensures your plumbing system operates safely, efficiently, and compliant with current standards.`
    },
    {
      title: "Sewer Line Inspection (CCTV)",
      img: "https://media.istockphoto.com/id/951866060/photo/pipe-connection-working.jpg?s=612x612&w=0&k=20&c=n7Sx0wBfisO7E25SDyGveojuY5z8HZJPsEdDNGUJyqM=",

      desc: "Non‑invasive inspections with sewer‑camera tech to detect blockages and damage.",
      context: `Our Sewer Line Inspection uses specialized CCTV cameras navigated through your sewer lines to capture high‑resolution footage of blockages, cracks, root intrusion, and pipe deterioration. This thorough, non‑destructive inspection lets us diagnose issues accurately and recommend precise repairs—saving you from unnecessary digging and costly surprises.`
    },
    {
      title: "Backflow Prevention",
      img: "https://media.istockphoto.com/id/1023016836/photo/blue-pvc-water-pipe-installation-from-pump-to-tank-with-ball-valve.jpg?s=612x612&w=0&k=20&c=e6ZvCubazYCnYDe7MDsrVzakl5W-nHUvN5PDAiHtNE8=",
      
      desc: "Install and test devices to stop contaminated water from reversing into clean supply.",
      context: `We install, repair, and test backflow prevention devices to stop contaminated water from reversing into your clean supply—protecting your family and building's water integrity. Our certified service includes annual testing, maintenance, and compliance documentation, ensuring both health safety and adherence to local regulations.`
    },
    {
      title: "Emergency Plumbing Services",
      img: "https://media.istockphoto.com/id/1350033407/photo/drainpipe-in-the-bathroom.jpg?s=612x612&w=0&k=20&c=dTiGfl1EI4tcKrX8Mctd1vyVtc-cemDEbrEMsH-ar_U=",
      
      desc: "24/7 response for burst pipes, major leaks, sewer backups and other urgent situations.",
      context: `Our Emergency Plumbing Services are available 24/7 to handle critical situations like burst pipes, major leaks, and sewer overflows. With rapid response, we quickly secure the situation, mitigate damage, and restore function—minimizing downtime, protecting your property, and offering peace of mind when you need it most.`
    },
    {
      title: "Fixture Installation & Repair",
      img: "https://media.istockphoto.com/id/1306011895/photo/plumber-hand-holds-a-new-faucet-for-installing-into-the-kitchen-sink.jpg?s=612x612&w=0&k=20&c=VlOrWXiVD-9oNn6v287uKWV11tT3WVvTmlC9Vf9p2Og=",
      
      desc: "Installing/upgrading sinks, faucets, showers, tubs and other fixtures.",
      context: `We handle installation and repair of all fixtures—kitchen and bathroom sinks, faucets, showers, bathtubs, and more. Our service ensures watertight connections, proper drainage, and optimal functionality, helping you upgrade fixtures for better efficiency, style, and reliability—without leaks or water waste.`
    },
    {
      title: "Gas Line Services",
      img: "https://media.istockphoto.com/id/1312405670/photo/oil-or-gas-transportation-with-blue-gas-or-pipe-line-valves-on-soil-and-sunrise-background.jpg?s=612x612&w=0&k=20&c=fWLQ8A1oC1_MRweaasDK-uMp433d9joVixs-MvcRTqc=",
      desc: "Safe installation and repair of gas piping for heaters, stoves, and other appliances.",
      context: `Our certified Gas Line Services include expert installation, inspection, and repair of natural gas pipes feeding water heaters, stoves, and HVAC systems. Safety is our priority—we follow all codes and regulations, conduct leak detection testing, and ensure secure, compliant piping free of corrosion or gas loss.`
    },
  ];
  
  return ( 
    <div className="container py-5">
      <h2 className="text-center mb-4 py-5 p-5">Our Plumbing Services</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3  ">
        {services.map((svc, idx) => (
          <div className="col" key={idx}>
            <div className="card h-100 shadow-sm">
              <img src={svc.img} className="card-img-top" alt={svc.title} />
              <div className="card-body">
                <h5 className="card-title">{svc.title}</h5>
                <p className="card-text">{svc.desc}</p>
                <button
                  className="btn btn-primary mt-2"
                  onClick={() => setShowModalIndex(idx)}
                >
                  View more
                </button>
              </div>
            </div>

            {/* Modal */}
            <Modal
              show={showModalIndex === idx}
              onHide={() => setShowModalIndex(null)}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>{svc.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="img-fluid rounded mb-3"
                />
                <p>{svc.desc}</p>
                <p>{svc.context}</p>
              </Modal.Body>
              <Modal.Footer>
                
                <Button
                  variant="secondary"
                  onClick={() => setShowModalIndex(null)}
                >
                  Close
                </Button>
              </Modal.Footer>

            </Modal>
            {/* <a
              href="https://wa.me/254712345678"
              className="whatsapp-float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/220/220236.png"
                alt="WhatsApp"
                style={{ width: "60px", height: "60px" }}
              />
            </a> */}
          </div>
        ))}
      </div>

      {/* Floating Social Media Buttons */}
      <div
        style={{
          position: "fixed",
          right: "20px",
          top: "45%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          zIndex: 1000,
        }}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/254758849440"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
            alt="WhatsApp"
            style={{ width: "30px", height: "30px" }}
          />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/yourplumbingpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
            alt="Instagram"
            style={{ width: "30px", height: "30px" }}
          />
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com/yourplumbingpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
            alt="Facebook"
            style={{ width: "30px", height: "30px" }}
          />
        </a>
  </div>
      
    </div>
  );
};

export default Services;
