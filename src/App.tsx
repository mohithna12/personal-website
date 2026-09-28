import { Outlet } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { AnimatedBackground } from './components/AnimatedBackground';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Animated falling purple specks */}
      <AnimatedBackground />

      {/* Purple gradient in corners */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-800/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-800/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        <Navigation />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
