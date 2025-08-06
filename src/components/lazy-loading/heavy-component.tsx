import { useMemo } from 'react';

const HeavyComponent = () => {
  // Simulate heavy computation (e.g., rendering 10,000 divs)
  const blocks = useMemo(() => {
    const result = [];
    for (let i = 0; i < 50; i++) {
      result.push(
        <li key={i} className="p-8 border-red-400 border m-8">
          Block #{i + 1}
        </li>
      );
    }

    // Simulate blocking CPU calculation
    const start = performance.now();
    while (performance.now() - start < 5 * 1000); // Block for 5 seconds

    return result;
  }, []);

  return (
    <div className="text-2xl font-bold border border-green-600 p-8 m-8">
      <h2 className="text-center">This is a heavy component</h2>
      <ul className="overflow-auto max-h-72 p-8 m-8">{blocks}</ul>
    </div>
  );
};

export default HeavyComponent;
