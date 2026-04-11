const PetalParticles = () => {
  const petals = [
    { className: "petal-1", style: { left: "10%", top: "-20px", width: 12, height: 12, background: "hsl(340, 60%, 75%)" } },
    { className: "petal-2", style: { left: "30%", top: "-30px", width: 8, height: 8, background: "hsl(270, 45%, 80%)" } },
    { className: "petal-3", style: { left: "55%", top: "-15px", width: 10, height: 10, background: "hsl(20, 70%, 85%)" } },
    { className: "petal-4", style: { left: "75%", top: "-25px", width: 14, height: 14, background: "hsl(340, 50%, 82%)" } },
    { className: "petal-5", style: { left: "90%", top: "-10px", width: 9, height: 9, background: "hsl(270, 40%, 78%)" } },
  ];

  return (
    <>
      {petals.map((p, i) => (
        <div key={i} className={`petal ${p.className}`} style={p.style} />
      ))}
    </>
  );
};

export default PetalParticles;
