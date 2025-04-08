import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StepWizard from '../shared/StepWizard';
import FormStepWrapper from '../shared/FormStepWrapper';
import SolihaButton from '../shared/SolihaButton';
import { ArrowLeft, ArrowRight, Home, FileText, Phone } from 'lucide-react';

// Étape 1 - Logement
const LogementStep = ({ formData, updateFormData, nextStep }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    updateFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <FormStepWrapper 
      title="Informations sur votre bien immobilier" 
      subtitle="Ces informations nous permettront de vous conseiller sur les dispositifs de location adaptés à votre situation."
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
          <label className="block text-gray-700 mb-2" htmlFor="surface">Surface (m²)</label>
          <input
            type="number"
            id="surface"
            name="surface"
            value={formData.surface || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#03628a]"
            required
          />
        </div>

        <div className="form-group">
          <label className="block text-gray-700 mb-2" htmlFor="nbPieces">Nombre de pièces</label>
          <select
            id="nbPieces"
            name="nbPieces"
            value={formData.nbPieces || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#03628a]"
            required
          >
            <option value="">Sélectionnez</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5+">5 ou plus</option>
          </select>
        </div>

        <div className="form-group">
          <label className="block text-gray-700 mb-2">Type de logement</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="typeLogement"
                value="maison"
                checked={formData.typeLogement === 'maison'}
                onChange={handleChange}
                className="form-radio text-[#03628a]"
              />
              <span className="ml-2">Maison</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="typeLogement"
                value="appartement"
                checked={formData.typeLogement === 'appartement'}
                onChange={handleChange}
                className="form-radio text-[#03628a]"
              />
              <span className="ml-2">Appartement</span>
            </label>
          </div>
        </div>

        <div className="form-group">
          <label className="block text-gray-700 mb-2" htmlFor="anneeConstruction">Année de construction</label>
          <select
            id="anneeConstruction"
            name="anneeConstruction"
            value={formData.anneeConstruction || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#03628a]"
          >
            <option value="">Sélectionnez</option>
            <option value="avant1949">Avant 1949</option>
            <option value="1949-1974">1949-1974</option>
            <option value="1975-1990">1975-1990</option>
            <option value="1991-2005">1991-2005</option>
            <option value="apres2005">Après 2005</option>
          </select>
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

// Étape 2 - Situation propriétaire
const SituationProprietaireStep = ({ formData, updateFormData, prevStep, nextStep }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    updateFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <FormStepWrapper 
      title="Situation actuelle du bien" 
      subtitle="Ces informations nous permettront de vous orienter vers les dispositifs les plus adaptés."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-group">
          <label className="block text-gray-700 mb-2">Logement vacant ?</label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="logementVacant"
              checked={formData.logementVacant || false}
              onChange={handleChange}
              className="form-checkbox text-[#03628a]"
            />
            <span className="ml-2">Oui</span>
          </label>
        </div>

        <div className="form-group">
          <label className="block text-gray-700 mb-2">Convention ANAH existante ?</label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="conventionANAH"
              checked={formData.conventionANAH || false}
              onChange={handleChange}
              className="form-checkbox text-[#03628a]"
            />
            <span className="ml-2">Oui</span>
          </label>
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
          onClick={nextStep}
          className="flex items-center"
        >
          Suivant <ArrowRight size={16} className="ml-2" />
        </SolihaButton>
      </div>
    </FormStepWrapper>
  );
};

// Étape 3 - Projet
const ProjetStep = ({ formData, updateFormData, prevStep, submitForm }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    updateFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <FormStepWrapper 
      title="Votre projet de location" 
      subtitle="Ces informations nous permettront de vous proposer les solutions les plus adaptées à votre projet."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-group">
          <label className="block text-gray-700 mb-2">Souhaitez-vous conventionner social / très social ?</label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="conventionnerSocial"
              checked={formData.conventionnerSocial || false}
              onChange={handleChange}
              className="form-checkbox text-[#03628a]"
            />
            <span className="ml-2">Oui</span>
          </label>
        </div>

        <div className="form-group">
          <label className="block text-gray-700 mb-2">Travaux à faire avant location ?</label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="travauxAvantLocation"
              checked={formData.travauxAvantLocation || false}
              onChange={handleChange}
              className="form-checkbox text-[#03628a]"
            />
            <span className="ml-2">Oui</span>
          </label>
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
          Voir les informations
        </SolihaButton>
      </div>
    </FormStepWrapper>
  );
};

const LouerBienSimulateur = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Étape 1 - Logement
    codePostal: '',
    surface: '',
    nbPieces: '',
    typeLogement: 'maison',
    anneeConstruction: '',
    
    // Étape 2 - Situation propriétaire
    logementVacant: false,
    conventionANAH: false,
    
    // Étape 3 - Projet
    conventionnerSocial: false,
    travauxAvantLocation: false,
    
    // Résultats
    showResults: false
  });

  const steps = ["Logement", "Situation propriétaire", "Projet"];

  const updateFormData = (newData) => {
    setFormData(newData);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const submitForm = () => {
    setFormData({
      ...formData,
      showResults: true
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
          <LogementStep 
            formData={formData} 
            updateFormData={updateFormData} 
            nextStep={nextStep} 
          />
        );
      case 1:
        return (
          <SituationProprietaireStep 
            formData={formData} 
            updateFormData={updateFormData} 
            prevStep={prevStep} 
            nextStep={nextStep} 
          />
        );
      case 2:
        return (
          <ProjetStep 
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
          <h1 className="text-3xl font-bold text-center">Simulateur - Louer un bien immobilier</h1>
          <p className="text-center mt-2 text-[#a1d5e2]">Découvrez les dispositifs d'aide à la location et à la mise en location</p>
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
  const { conventionnerSocial, travauxAvantLocation } = formData;
  
  return (
    <FormStepWrapper 
      title="Informations sur la location de votre bien" 
      subtitle="Voici les informations et dispositifs qui pourraient vous intéresser pour votre projet de location."
    >
      <div className="bg-[#a1d5e2] bg-opacity-20 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold text-[#03628a] mb-4">Dispositifs disponibles</h3>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-[#03628a] text-white p-2 rounded-full mr-4">
              <Home size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-[#03628a]">Aide ANAH possible avant mise en location</h4>
              <p className="text-gray-600">
                L'Agence Nationale de l'Habitat (ANAH) peut vous aider à financer des travaux de rénovation avant la mise en location de votre bien.
                {travauxAvantLocation && <span className="font-medium text-[#ed6f5d]"> Cette option correspond à votre situation.</span>}
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-[#03628a] text-white p-2 rounded-full mr-4">
              <FileText size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-[#03628a]">Abattement fiscal jusqu'à 70% si convention</h4>
              <p className="text-gray-600">
                En conventionnant votre logement avec l'ANAH (Loc'Avantages), vous pouvez bénéficier d'un abattement fiscal allant jusqu'à 70% des revenus locatifs.
                {conventionnerSocial && <span className="font-medium text-[#ed6f5d]"> Cette option correspond à votre projet.</span>}
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-[#03628a] text-white p-2 rounded-full mr-4">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-[#03628a]">Accompagnement complet par Soliha</h4>
              <p className="text-gray-600">
                Soliha peut vous accompagner dans l'ensemble de vos démarches : montage des dossiers de subvention, conseils sur les loyers, mise en relation avec des locataires, gestion locative...
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-md mb-6">
        <h3 className="text-lg font-semibold text-[#03628a] mb-4">Avantages de la location conventionnée</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Réduction d'impôt significative sur vos revenus locatifs</li>
          <li>Garantie de loyer impayé possible (Visale)</li>
          <li>Aide aux travaux de rénovation avant mise en location</li>
          <li>Accompagnement personnalisé tout au long de votre projet</li>
          <li>Contribution à l'offre de logements abordables</li>
        </ul>
      </div>
      
      <div className="bg-[#03628a] bg-opacity-10 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-[#03628a] mb-4">Prochaines étapes</h3>
        <p className="mb-6">
          Pour bénéficier d'un accompagnement personnalisé et obtenir plus d'informations sur les dispositifs adaptés à votre situation, nous vous invitons à prendre contact avec nos équipes.
        </p>
        <div className="flex justify-center">
          <SolihaButton>Être accompagné par Soliha</SolihaButton>
        </div>
      </div>
      
      <div className="mt-6 flex justify-between">
        <SolihaButton 
          onClick={resetForm} 
          className="bg-gray-500"
        >
          Retour à l'accueil
        </SolihaButton>
      </div>
    </FormStepWrapper>
  );
};

export default LouerBienSimulateur;
