import React from 'react';
import { Home, Building, Accessibility, Key } from 'lucide-react';
import SimulatorCard from './SimulatorCard';

const HomePage = () => {
  const simulators = [
    {
      title: 'Rénover mon logement',
      icon: Home,
      path: '/renover-logement',
      description: 'Simulez les aides financières pour la rénovation de votre résidence principale ou secondaire.'
    },
    {
      title: 'Rénover ma copropriété',
      icon: Building,
      path: '/renover-copropriete',
      description: 'Découvrez les aides disponibles pour les travaux de rénovation en copropriété.'
    },
    {
      title: 'Adapter mon logement',
      icon: Accessibility,
      path: '/adapter-logement',
      description: 'Estimez les aides pour adapter votre logement aux situations de handicap ou de perte d\'autonomie.'
    },
    {
      title: 'Louer un bien immobilier',
      icon: Key,
      path: '/louer-bien',
      description: 'Informez-vous sur les dispositifs d\'aide à la location et à la mise en location de votre bien.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <header className="bg-[#03628a] text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Simulateur d'aides financières Soliha</h1>
          <p className="text-center mt-2 text-[#a1d5e2]">Améliorez ou adaptez votre habitat avec nos solutions d'accompagnement</p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-[#03628a] mb-8 text-center">Choisissez votre simulateur</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {simulators.map((simulator, index) => (
            <SimulatorCard 
              key={index}
              title={simulator.title}
              icon={simulator.icon}
              path={simulator.path}
              description={simulator.description}
            />
          ))}
        </div>
      </main>
      
      <footer className="bg-[#03628a] text-white py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Soliha - Solidaires pour l'habitat</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
