import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StepWizard from '../shared/StepWizard';
import FormStepWrapper from '../shared/FormStepWrapper';
import SolihaButton from '../shared/SolihaButton';
import PieChartAidSplit from '../shared/PieChartAidSplit';
import ResultCard from '../shared/ResultCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Étape 1 - Informations générales
const InformationsGeneralesStep = ({ formData, updateFormData, nextStep }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    updateFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <FormStepWrapper 
      title="Informations générales sur votre copropriété" 
      subtitle="Ces informations nous permettront d'évaluer les aides auxquelles votre copropriété pourrait avoir droit."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-group">
          <label className="block text-gray-700 mb-2" htmlFor="codePostal">Code postal</label>
          <input
            type="text"
            id="codePostal"
            name="codePostal"
            value={formData.codePostal || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#03628a]"
            required
          />
        </div>

        <div className="form-group">
          <label className="block text-gray-700 mb-2" htmlFor="nombreLogements">Nombre de logements</label>
          <input
            type="number"
            id="nombreLogements"
            name="nombreLogements"
            value={formData.nombreLogements || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#03628a]"
            required
          />
        </div>

        <div className="form-group">
          <label className="block text-gray-700 mb-2" htmlFor="anneeConstruction">Année de construction</label>
          <select
            id="anneeConstruction"
            name="anneeConstruction"
            value={formData.anneeConstruction || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#03628a]"
            required
          >
            <option value="">Sélectionnez</option>
            <option value="avant1949">Avant 1949</option>
            <option value="1949-1974">1949-1974</option>
            <option value="1975-1990">1975-1990</option>
            <option value="1991-2005">1991-2005</option>
            <option value="apres2005">Après 2005</option>
          </select>
        </div>

        <div className="form-group">
          <label className="block text-gray-700 mb-2">Syndic professionnel ?</label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="syndicPro"
              checked={formData.syndicPro || false}
              onChange={handleChange}
              className="form-checkbox text-[#03628a]"
            />
            <span className="ml-2">Oui</span>
          </label>
        </div>

        <div className="form-group md:col-span-2">
          <label className="block text-gray-700 mb-2">Immatriculée au Registre National des Copropriétés (RNIC) ?</label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="immatriculeeRNIC"
              checked={formData.immatriculeeRNIC || false}
              onChange={handleChange}
              className="form-checkbox text-[#03628a]"
            />
            <span className="ml-2">Oui</span>
          </label>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <SolihaButton onClick={nextStep} className="flex items-center">
          Suivant <ArrowRight size={16} className="ml-2" />
        </SolihaButton>
      </div>
    </FormStepWrapper>
  );
};

// Étape 2 - Travaux
const TravauxStep = ({ formData, updateFormData, prevStep, nextStep }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'typeTravaux') {
      // Gestion des cases à cocher multiples
      const updatedTypeTravaux = {...formData.typeTravaux};
      updatedTypeTravaux[value] = checked;
      
      updateFormData({
        ...formData,
        typeTravaux: updatedTypeTravaux
      });
    } else {
      updateFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  return (
    <FormStepWrapper 
      title="Informations sur les travaux de la copropriété" 
      subtitle="Précisez la nature et le montant estimé des travaux de rénovation envisagés."
    >
      <div className="form-group mb-4">
        <label className="block text-gray-700 mb-2">Type de travaux envisagés</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {['isolation_facade', 'toiture', 'chauffage_collectif', 'ventilation', 'autres'].map((type) => (
            <label key={type} className="inline-flex items-center">
              <input
                type="checkbox"
                name="typeTravaux"
                value={type}
                checked={formData.typeTravaux?.[type] || false}
                onChange={handleChange}
                className="form-checkbox text-[#03628a]"
              />
              <span className="ml-2 capitalize">{type.replace('_', ' ')}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="form-group mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="montantTotal">Montant total TTC (€)</label>
        <input
          type="number"
          id="montantTotal"
          name="montantTotal"
          value={formData.montantTotal || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#03628a]"
          required
        />
      </div>

      <div className="form-group mb-4">
        <label className="block text-gray-700 mb-2">Audit énergétique réalisé ?</label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="auditEnergetique"
            checked={formData.auditEnergetique || false}
            onChange={handleChange}
            className="form-checkbox text-[#03628a]"
          />
          <span className="ml-2">Oui</span>
        </label>
      </div>

      <div className="form-group mb-4">
        <label className="block text-gray-700 mb-2">Ménages modestes dans la copropriété ?</label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="menagesModestes"
            checked={formData.menagesModestes || false}
            onChange={handleChange}
            className="form-checkbox text-[#03628a]"
          />
          <span className="ml-2">Oui</span>
        </label>
      </div>

      <div className="mt-6 flex justify-between">
        <SolihaButton 
          onClick={prevStep} 
          className="bg-gray-500 flex items-center"
        >
          <ArrowLeft size={16} className="mr-2" /> Précédent
        </SolihaButton>
        <SolihaButton 
          onClick={nextStep}
          className="flex items-center"
        >
          Suivant <ArrowRight size={16} className="ml-2" />
        </SolihaButton>
      </div>
    </FormStepWrapper>
  );
};

// Étape 3 - Données financières
const DonneesFinancieresStep = ({ formData, updateFormData, prevStep, submitForm }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    updateFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <FormStepWrapper 
      title="Données financières de la copropriété" 
      subtitle="Ces informations nous permettront d'affiner l'estimation des aides disponibles."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-group">
          <label className="block text-gray-700 mb-2" htmlFor="chargesMoyennes">Charges moyennes par logement (€/an)</label>
          <input
            type="number"
            id="chargesMoyennes"
            name="chargesMoyennes"
            value={formData.chargesMoyennes || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#03628a]"
          />
        </div>

        <div className="form-group">
          <label className="block text-gray-700 mb-2">Aides déjà obtenues ?</label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="aidesDejaObtenues"
              checked={formData.aidesDejaObtenues || false}
              onChange={handleChange}
              className="form-checkbox text-[#03628a]"
            />
            <span className="ml-2">Oui</span>
          </label>
        </div>

        {formData.aidesDejaObtenues && (
          <div className="form-group">
            <label className="block text-gray-700 mb-2" htmlFor="montantAidesObtenues">Montant des aides déjà obtenues (€)</label>
            <input
              type="number"
              id="montantAidesObtenues"
              name="montantAidesObtenues"
              value={formData.montantAidesObtenues || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#03628a]"
            />
          </div>
        )}

        <div className="form-group">
          <label className="block text-gray-700 mb-2" htmlFor="nombreLogementsVacants">Nombre de logements vacants</label>
          <input
            type="number"
            id="nombreLogementsVacants"
            name="nombreLogementsVacants"
            value={formData.nombreLogementsVacants || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#03628a]"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <SolihaButton 
          onClick={prevStep} 
          className="bg-gray-500 flex items-center"
        >
          <ArrowLeft size={16} className="mr-2" /> Précédent
        </SolihaButton>
        <SolihaButton 
          onClick={submitForm}
          className="flex items-center"
        >
          Calculer les aides
        </SolihaButton>
      </div>
    </FormStepWrapper>
  );
};

const RenoverCoproprieteSimulateur = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Étape 1 - Informations générales
    codePostal: '',
    nombreLogements: '',
    anneeConstruction: '',
    syndicPro: false,
    immatriculeeRNIC: false,
    
    // Étape 2 - Travaux
    typeTravaux: {
      isolation_facade: false,
      toiture: false,
      chauffage_collectif: false,
      ventilation: false,
      autres: false
    },
    montantTotal: '',
    auditEnergetique: false,
    menagesModestes: false,
    
    // Étape 3 - Données financières
    chargesMoyennes: '',
    aidesDejaObtenues: false,
    montantAidesObtenues: '',
    nombreLogementsVacants: '',
    
    // Résultats
    showResults: false,
    aideCalculee: 0,
    bonus: 0
  });

  const steps = ["Informations générales", "Travaux", "Données financières"];

  const updateFormData = (newData) => {
    setFormData(newData);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const calculateAide = () => {
    const { montantTotal, nombreLogements, menagesModestes } = formData;
    
    // Conversion en nombres
    const montant = parseInt(montantTotal, 10) || 0;
    const nbLogements = parseInt(nombreLogements, 10) || 1;
    
    // Plafond = 15 000 € par logement
    const plafond = 15000 * nbLogements;
    
    // Base = 25% du montant total (plafonné)
    const montantEligible = Math.min(montant, plafond);
    const aideBase = Math.round(montantEligible * 0.25);
    
    // Bonus : + 3 000 € par logement si ≥ 75% ménages modestes
    const bonus = menagesModestes ? Math.round(3000 * nbLogements) : 0;
    
    // Aide totale
    const aideCalculee = aideBase + bonus;
    
    return {
      aideCalculee,
      aideBase,
      bonus,
      montantEligible,
      plafond
    };
  };

  const submitForm = () => {
    const resultats = calculateAide();
    
    setFormData({
      ...formData,
      showResults: true,
      aideCalculee: resultats.aideCalculee,
      aideBase: resultats.aideBase,
      bonus: resultats.bonus,
      montantEligible: resultats.montantEligible,
      plafond: resultats.plafond
    });
    
    // Passer à l'affichage des résultats
    nextStep();
  };

  const resetForm = () => {
    navigate('/');
  };

  // Rendu conditionnel selon l'étape actuelle
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <InformationsGeneralesStep 
            formData={formData} 
            updateFormData={updateFormData} 
            nextStep={nextStep} 
          />
        );
      case 1:
        return (
          <TravauxStep 
            formData={formData} 
            updateFormData={updateFormData} 
            prevStep={prevStep} 
            nextStep={nextStep} 
          />
        );
      case 2:
        return (
          <DonneesFinancieresStep 
            formData={formData} 
            updateFormData={updateFormData} 
            prevStep={prevStep} 
            submitForm={submitForm} 
          />
        );
      case 3:
        return (
          <ResultsView 
            formData={formData} 
            resetForm={resetForm} 
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <header className="bg-[#03628a] text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Simulateur - Rénover ma copropriété</h1>
          <p className="text-center mt-2 text-[#a1d5e2]">Estimez les aides financières pour les travaux de rénovation de votre copropriété</p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {currentStep <= 2 && (
          <StepWizard 
            steps={steps} 
            currentStep={currentStep} 
            onStepChange={setCurrentStep} 
          />
        )}
        
        {renderStep()}
      </main>
      
      <footer className="bg-[#03628a] text-white py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Soliha - Solidaires pour l'habitat</p>
        </div>
      </footer>
    </div>
  );
};

// Composant d'affichage des résultats
const ResultsView = ({ formData, resetForm }) => {
  const { aideCalculee, aideBase, bonus, montantTotal, nombreLogements } = formData;
  const montant = parseInt(montantTotal, 10) || 0;
  const resteACharge = montant - aideCalculee;
  
  // Données pour le graphique
  const chartData = [
    { name: 'Aides', value: aideCalculee },
    { name: 'Reste à charge', value: resteACharge }
  ];
  
  return (
    <FormStepWrapper 
      title="Résultats de votre simulation" 
      subtitle="Voici l'estimation des aides auxquelles votre copropriété pourrait prétendre pour ses travaux de rénovation."
    >
      <div className="bg-[#a1d5e2] bg-opacity-20 p-4 rounded-lg mb-6">
        <p className="text-center text-lg">
          Selon vos informations, votre copropriété pourrait recevoir jusqu'à <span className="font-bold text-[#03628a]">{aideCalculee.toLocaleString()} €</span> d'aides.
        </p>
        <p className="text-center text-sm mt-2">
          Cela représente environ <span className="font-bold">{Math.round(aideCalculee / parseInt(nombreLogements, 10)).toLocaleString()} €</span> par logement.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold text-[#03628a] mb-4">Répartition financière</h3>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Montant total des travaux :</span>
              <span>{montant.toLocaleString()} €</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Montant des aides :</span>
              <span className="text-[#03628a] font-semibold">{aideCalculee.toLocaleString()} €</span>
            </div>
            <div className="flex justify-between pt-2 border-t">
              <span className="font-medium">Reste à charge :</span>
              <span className="text-[#ed6f5d] font-semibold">{resteACharge.toLocaleString()} €</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-[#03628a] mb-4">Répartition graphique</h3>
          <div className="bg-white rounded-lg p-4 shadow-sm h-64">
            <PieChartAidSplit data={chartData} />
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-md mb-6">
        <h3 className="text-lg font-semibold text-[#03628a] mb-4">Détail des aides</h3>
        <ResultCard 
          title="Aide de base MaPrimeRénov' Copropriété" 
          amount={aideBase} 
          description="25% du montant total des travaux (plafonné à 15 000 € par logement)"
        />
        
        {bonus > 0 && (
          <ResultCard 
            title="Bonus ménages modestes" 
            amount={bonus} 
            description="3 000 € par logement pour les copropriétés comptant une majorité de ménages modestes"
          />
        )}
      </div>
      
      <div className="bg-[#03628a] bg-opacity-10 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-[#03628a] mb-2">Et maintenant ?</h3>
        <p className="mb-4">Soliha peut accompagner votre copropriété dans toutes les démarches pour obtenir ces aides et réaliser vos travaux dans les meilleures conditions.</p>
        <div className="flex justify-center">
          <SolihaButton>Être recontacté par Soliha</SolihaButton>
        </div>
      </div>
      
      <div className="mt-6 flex justify-between">
        <SolihaButton 
          onClick={resetForm} 
          className="bg-gray-500"
        >
          Retour à l'accueil
        </SolihaButton>
        <SolihaButton>
          Imprimer les résultats
        </SolihaButton>
      </div>
    </FormStepWrapper>
  );
};

export default RenoverCoproprieteSimulateur;
