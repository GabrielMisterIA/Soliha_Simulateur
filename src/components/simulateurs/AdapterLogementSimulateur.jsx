import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StepWizard from '../shared/StepWizard';
import FormStepWrapper from '../shared/FormStepWrapper';
import SolihaButton from '../shared/SolihaButton';
import PieChartAidSplit from '../shared/PieChartAidSplit';
import ResultCard from '../shared/ResultCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Étape 1 - Profil
const ProfilStep = ({ formData, updateFormData, nextStep }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'aides') {
      // Gestion des cases à cocher multiples
      const updatedAides = {...formData.aides};
      updatedAides[value] = checked;
      
      updateFormData({
        ...formData,
        aides: updatedAides
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
      title="Informations sur votre profil" 
      subtitle="Ces informations nous permettront d'évaluer les aides auxquelles vous pourriez avoir droit pour adapter votre logement."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-group">
          <label className="block text-gray-700 mb-2" htmlFor="age">Âge</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#03628a]"
            required
          />
        </div>

        <div className="form-group">
          <label className="block text-gray-700 mb-2">Handicap ?</label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="handicap"
              checked={formData.handicap || false}
              onChange={handleChange}
              className="form-checkbox text-[#03628a]"
            />
            <span className="ml-2">Oui</span>
          </label>
        </div>

        <div className="form-group">
          <label className="block text-gray-700 mb-2" htmlFor="tauxIncapacite">Taux d'incapacité</label>
          <select
            id="tauxIncapacite"
            name="tauxIncapacite"
            value={formData.tauxIncapacite || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#03628a]"
          >
            <option value="">Sélectionnez</option>
            <option value="inconnu">Inconnu</option>
            <option value="moins50">Moins de 50%</option>
            <option value="plus50">50% ou plus</option>
            <option value="plus80">80% ou plus</option>
          </select>
        </div>

        <div className="form-group md:col-span-2">
          <label className="block text-gray-700 mb-2">Bénéficiez-vous de l'une de ces aides ?</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {['APA', 'AAH', 'PCH'].map((aide) => (
              <label key={aide} className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="aides"
                  value={aide}
                  checked={formData.aides?.[aide] || false}
                  onChange={handleChange}
                  className="form-checkbox text-[#03628a]"
                />
                <span className="ml-2">{aide}</span>
              </label>
            ))}
          </div>
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

// Étape 2 - Logement
const LogementStep = ({ formData, updateFormData, prevStep, nextStep }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    updateFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <FormStepWrapper 
      title="Informations sur votre logement" 
      subtitle="Ces informations nous permettront d'affiner l'estimation des aides disponibles."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-group">
          <label className="block text-gray-700 mb-2">Statut</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="statut"
                value="proprietaire"
                checked={formData.statut === 'proprietaire'}
                onChange={handleChange}
                className="form-radio text-[#03628a]"
              />
              <span className="ml-2">Propriétaire</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="statut"
                value="locataire"
                checked={formData.statut === 'locataire'}
                onChange={handleChange}
                className="form-radio text-[#03628a]"
              />
              <span className="ml-2">Locataire</span>
            </label>
          </div>
        </div>

        <div className="form-group">
          <label className="block text-gray-700 mb-2">Résidence principale ?</label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="residencePrincipale"
              checked={formData.residencePrincipale || false}
              onChange={handleChange}
              className="form-checkbox text-[#03628a]"
            />
            <span className="ml-2">Oui</span>
          </label>
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

// Étape 3 - Travaux
const TravauxStep = ({ formData, updateFormData, prevStep, submitForm }) => {
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
      title="Informations sur vos travaux d'adaptation" 
      subtitle="Précisez la nature et le montant estimé des travaux d'adaptation envisagés."
    >
      <div className="form-group mb-4">
        <label className="block text-gray-700 mb-2">Type de travaux envisagés</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {['douche', 'monte_escalier', 'elargissement', 'autres'].map((type) => (
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
        <label className="block text-gray-700 mb-2" htmlFor="montantTravaux">Estimation du montant des travaux (€)</label>
        <input
          type="number"
          id="montantTravaux"
          name="montantTravaux"
          value={formData.montantTravaux || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#03628a]"
          required
        />
      </div>

      <div className="form-group mb-4">
        <label className="block text-gray-700 mb-2">Travaux déjà commencés ?</label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="travauxCommences"
            checked={formData.travauxCommences || false}
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
          onClick={submitForm}
          className="flex items-center"
        >
          Calculer mes aides
        </SolihaButton>
      </div>
    </FormStepWrapper>
  );
};

const AdapterLogementSimulateur = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Étape 1 - Profil
    age: '',
    handicap: false,
    tauxIncapacite: '',
    aides: {
      APA: false,
      AAH: false,
      PCH: false
    },
    
    // Étape 2 - Logement
    statut: 'proprietaire',
    residencePrincipale: false,
    typeLogement: 'maison',
    anneeConstruction: '',
    codePostal: '',
    
    // Étape 3 - Travaux
    typeTravaux: {
      douche: false,
      monte_escalier: false,
      elargissement: false,
      autres: false
    },
    montantTravaux: '',
    travauxCommences: false,
    
    // Résultats
    showResults: false,
    aideCalculee: 0,
    categorieAide: ''
  });

  const steps = ["Profil", "Logement", "Travaux"];

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
    const { age, handicap, tauxIncapacite, aides, montantTravaux } = formData;
    
    // Conversion en nombres
    const montant = parseInt(montantTravaux, 10) || 0;
    const ageNum = parseInt(age, 10) || 0;
    
    // Plafond fixe à 22 000 €
    const plafond = 22000;
    
    // Détermination de la catégorie selon l'âge, le handicap et les aides
    let categorieAide = 'ineligible';
    let tauxAide = 0;
    
    // Critères d'éligibilité simplifiés pour l'exemple
    if (ageNum >= 60 || handicap || tauxIncapacite === 'plus50' || tauxIncapacite === 'plus80' || 
        aides.APA || aides.AAH || aides.PCH) {
      
      // Catégorisation simplifiée (à adapter selon les barèmes officiels)
      if (ageNum >= 75 || tauxIncapacite === 'plus80' || aides.APA || aides.PCH) {
        categorieAide = 'tres_modeste';
      } else if (ageNum >= 60 || handicap || tauxIncapacite === 'plus50' || aides.AAH) {
        categorieAide = 'modeste';
      }
    }
    
    // Détermination du taux selon la catégorie
    if (categorieAide === 'tres_modeste') tauxAide = 0.7; // 70%
    else if (categorieAide === 'modeste') tauxAide = 0.5; // 50%
    
    // Calcul de l'aide
    const montantEligible = Math.min(montant, plafond);
    const aideCalculee = Math.round(montantEligible * tauxAide);
    
    return {
      aideCalculee,
      categorieAide,
      montantEligible,
      tauxAide
    };
  };

  const submitForm = () => {
    const resultats = calculateAide();
    
    setFormData({
      ...formData,
      showResults: true,
      aideCalculee: resultats.aideCalculee,
      categorieAide: resultats.categorieAide,
      montantEligible: resultats.montantEligible,
      tauxAide: resultats.tauxAide
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
          <ProfilStep 
            formData={formData} 
            updateFormData={updateFormData} 
            nextStep={nextStep} 
          />
        );
      case 1:
        return (
          <LogementStep 
            formData={formData} 
            updateFormData={updateFormData} 
            prevStep={prevStep} 
            nextStep={nextStep} 
          />
        );
      case 2:
        return (
          <TravauxStep 
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
          <h1 className="text-3xl font-bold text-center">Simulateur - Adapter mon logement</h1>
          <p className="text-center mt-2 text-[#a1d5e2]">Estimez les aides financières pour l'adaptation de votre logement</p>
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
  const { aideCalculee, categorieAide, montantTravaux } = formData;
  const montant = parseInt(montantTravaux, 10) || 0;
  const resteACharge = montant - aideCalculee;
  
  // Données pour le graphique
  const chartData = [
    { name: 'Aides', value: aideCalculee },
    { name: 'Reste à charge', value: resteACharge }
  ];
  
  // Texte explicatif selon la catégorie
  let messageCategorie = "";
  if (categorieAide === 'tres_modeste') {
    messageCategorie = "Vous êtes dans la catégorie 'Très modeste' et pouvez bénéficier d'une aide à hauteur de 70% du montant des travaux.";
  } else if (categorieAide === 'modeste') {
    messageCategorie = "Vous êtes dans la catégorie 'Modeste' et pouvez bénéficier d'une aide à hauteur de 50% du montant des travaux.";
  } else {
    messageCategorie = "Selon vos informations, vous n'êtes pas éligible aux aides principales. D'autres dispositifs peuvent toutefois vous concerner.";
  }
  
  return (
    <FormStepWrapper 
      title="Résultats de votre simulation" 
      subtitle="Voici l'estimation des aides auxquelles vous pourriez prétendre pour vos travaux d'adaptation."
    >
      <div className="bg-[#a1d5e2] bg-opacity-20 p-4 rounded-lg mb-6">
        <p className="text-center text-lg">
          Selon vos informations, vous pourriez recevoir jusqu'à <span className="font-bold text-[#03628a]">{aideCalculee.toLocaleString()} €</span> d'aides.
        </p>
        <p className="text-center text-sm mt-2">{messageCategorie}</p>
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
          title="Aide de l'Anah pour l'adaptation" 
          amount={aideCalculee} 
          description="Aide de l'Agence Nationale de l'Habitat pour l'adaptation du logement à la perte d'autonomie"
        />
      </div>
      
      <div className="bg-[#03628a] bg-opacity-10 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-[#03628a] mb-2">Et maintenant ?</h3>
        <p className="mb-4">Soliha peut vous accompagner dans toutes vos démarches pour obtenir ces aides et réaliser vos travaux d'adaptation dans les meilleures conditions.</p>
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
          Imprimer mes résultats
        </SolihaButton>
      </div>
    </FormStepWrapper>
  );
};

export default AdapterLogementSimulateur;
