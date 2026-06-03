// hifi-app.jsx — compose the three hi-fi directions on a design canvas
const AB_W = 1240;
const AB_H = 1520;

function App() {
  return (
    <DesignCanvas>
      <DCSection id="dirs" title="Portfolio · Layout A — hi-fi directions" subtitle="Terminal / technical · green accent · Space Grotesk + JetBrains Mono · pick one to develop">
        <DCArtboard id="d1" label="D1 · Terminal (dark)" width={AB_W} height={AB_H}>
          <Dir1 />
        </DCArtboard>
        <DCArtboard id="d2" label="D2 · IDE (light)" width={AB_W} height={AB_H}>
          <Dir2 />
        </DCArtboard>
        <DCArtboard id="d3" label="D3 · Minimal mono (light)" width={AB_W} height={AB_H}>
          <Dir3 />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
