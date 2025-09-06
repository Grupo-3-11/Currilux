import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Plus, Trash2, ChevronUp, ChevronDown, Star } from 'lucide-react';

//=========== TIPOS (cv.types.ts) ===========//
// Define a estrutura dos nossos dados para garantir consistência.

type PersonalInfo = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  location: string;
  summary: string;
};

type Skill = {
  id: string;
  name: string;
  level: number; // Nível de 1 a 5
};

type Experience = {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

type CVData = {
  personalInfo: PersonalInfo;
  skills: Skill[];
  experience: Experience[];
};

//=========== HOOK (useCVData.ts) ===========//
// Este é o "cérebro" da nossa aplicação. Ele centraliza todos os dados
// do currículo e as funções para modificá-los.

const useCVData = () => {
  const [cvData, setCvData] = useState<CVData>({
    personalInfo: {
      name: 'Seu Nome Completo',
      email: 'seu.email@exemplo.com',
      phone: '(11) 98765-4321',
      linkedin: 'linkedin.com/in/seu-perfil',
      location: 'São Paulo, Brasil',
      summary: 'Profissional dedicado com experiência em desenvolvimento de software e metodologias ágeis. Buscando oportunidades para aplicar minhas habilidades em projetos desafiadores e inovadores, contribuindo para o crescimento da empresa.'
    },
    skills: [
      { id: crypto.randomUUID(), name: 'React', level: 5 },
      { id: crypto.randomUUID(), name: 'TypeScript', level: 4 },
      { id: crypto.randomUUID(), name: 'Node.js', level: 4 },
    ],
    experience: [
      {
        id: crypto.randomUUID(),
        title: 'Desenvolvedor Frontend Sênior',
        company: 'Empresa de Tecnologia',
        startDate: '2020-01',
        endDate: 'Presente',
        description: 'Liderança no desenvolvimento de interfaces de usuário responsivas com React e Next.js. Colaboração com equipes de UX/UI para criar experiências de usuário intuitivas. Otimização de performance e implementação de testes unitários.'
      },
       {
        id: crypto.randomUUID(),
        title: 'Engenheiro de Software Pleno',
        company: 'Startup Inovadora',
        startDate: '2018-06',
        endDate: '2019-12',
        description: 'Desenvolvimento e manutenção de aplicações web full-stack utilizando MERN (MongoDB, Express, React, Node.js). Participação em todo o ciclo de vida do produto, desde a concepção até o deploy.'
      }
    ]
  });

  // Funções para manipular os dados

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCvData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [name]: value }
    }));
  };

  const addSkill = () => {
    setCvData(prev => ({
      ...prev,
      skills: [...prev.skills, { id: crypto.randomUUID(), name: '', level: 3 }]
    }));
  };

  const updateSkill = (id: string, name: string, level: number) => {
    setCvData(prev => ({
      ...prev,
      skills: prev.skills.map(skill => skill.id === id ? { ...skill, name, level } : skill)
    }));
  };

  const removeSkill = (id: string) => {
    setCvData(prev => ({ ...prev, skills: prev.skills.filter(s => s.id !== id) }));
  };
  
  const moveSkill = (index: number, direction: 'up' | 'down') => {
    const newSkills = [...cvData.skills];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex >= 0 && targetIndex < newSkills.length) {
      [newSkills[index], newSkills[targetIndex]] = [newSkills[targetIndex], newSkills[index]];
      setCvData(prev => ({...prev, skills: newSkills}));
    }
  };

  const addExperience = () => {
    setCvData(prev => ({
      ...prev,
      experience: [...prev.experience, { id: crypto.randomUUID(), title: '', company: '', startDate: '', endDate: '', description: '' }]
    }));
  };

  const updateExperience = (id: string, field: keyof Experience, value: string) => {
    setCvData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => exp.id === id ? { ...exp, [field]: value } : exp)
    }));
  };

  const removeExperience = (id: string) => {
    setCvData(prev => ({ ...prev, experience: prev.experience.filter(e => e.id !== id) }));
  };

  return { cvData, handlePersonalInfoChange, addSkill, updateSkill, removeSkill, moveSkill, addExperience, updateExperience, removeExperience };
};


//=========== COMPONENTES DE UI REUTILIZÁVEIS ===========//

// Um campo de input com um ícone na frente
const IconInput = ({ icon: Icon, ...props }: { icon: React.ElementType, [key: string]: any }) => (
  <div className="relative flex items-center">
    <Icon className="absolute left-3 h-5 w-5 text-gray-400" />
    <input className="w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-gray-800 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" {...props} />
  </div>
);

// Componente para selecionar o nível de habilidade (estrelas)
const SkillLevel = ({ level, onChange }: { level: number; onChange: (level: number) => void }) => (
  <div className="flex">
    {[1, 2, 3, 4, 5].map(star => (
      <Star
        key={star}
        className={`h-5 w-5 cursor-pointer ${level >= star ? 'text-blue-500 fill-current' : 'text-gray-300'}`}
        onClick={() => onChange(star)}
      />
    ))}
  </div>
);


//=========== COMPONENTES DO FORMULÁRIO (Form/) ===========//

const PersonalInfoForm = ({ data, onChange }: { data: PersonalInfo, onChange: any }) => (
  <div className="space-y-4">
    <IconInput icon={Mail} type="text" name="name" value={data.name} onChange={onChange} placeholder="Nome Completo" />
    <IconInput icon={Mail} type="email" name="email" value={data.email} onChange={onChange} placeholder="E-mail" />
    <IconInput icon={Phone} type="tel" name="phone" value={data.phone} onChange={onChange} placeholder="Telefone" />
    <IconInput icon={Linkedin} type="text" name="linkedin" value={data.linkedin} onChange={onChange} placeholder="Perfil do LinkedIn" />
    <IconInput icon={MapPin} type="text" name="location" value={data.location} onChange={onChange} placeholder="Localização (ex: São Paulo, Brasil)" />
    <textarea name="summary" value={data.summary} onChange={onChange} placeholder="Resumo profissional..." rows={5} className="w-full rounded-md border border-gray-300 p-3 text-gray-800 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
  </div>
);

const SkillsForm = ({ skills, onUpdate, onAdd, onRemove, onMove }: { skills: Skill[], onUpdate: any, onAdd: any, onRemove: any, onMove: any }) => (
  <div className="space-y-4">
    {skills.map((skill, index) => (
      <div key={skill.id} className="flex items-center space-x-2 rounded-md border p-3">
        <div className="flex-grow space-y-2">
            <input type="text" placeholder="Habilidade (ex: React)" value={skill.name} onChange={(e) => onUpdate(skill.id, e.target.value, skill.level)} className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-800 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
            <SkillLevel level={skill.level} onChange={(level) => onUpdate(skill.id, skill.name, level)} />
        </div>
        <div className="flex flex-col items-center space-y-1">
            <button onClick={() => onMove(index, 'up')} className="p-1 text-gray-500 hover:text-blue-600 disabled:opacity-30" disabled={index === 0}><ChevronUp size={20}/></button>
            <button onClick={() => onRemove(skill.id)} className="p-1 text-gray-500 hover:text-red-600"><Trash2 size={20}/></button>
            <button onClick={() => onMove(index, 'down')} className="p-1 text-gray-500 hover:text-blue-600 disabled:opacity-30" disabled={index === skills.length - 1}><ChevronDown size={20}/></button>
        </div>
      </div>
    ))}
    <button onClick={onAdd} className="flex w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300 py-3 text-gray-500 transition hover:border-blue-500 hover:text-blue-500">
      <Plus className="mr-2 h-5 w-5" /> Adicionar Habilidade
    </button>
  </div>
);

const ExperienceForm = ({ experiences, onUpdate, onAdd, onRemove }: { experiences: Experience[], onUpdate: any, onAdd: any, onRemove: any }) => (
  <div className="space-y-4">
    {experiences.map(exp => (
      <div key={exp.id} className="space-y-3 rounded-lg border p-4">
        <input type="text" placeholder="Cargo" value={exp.title} onChange={(e) => onUpdate(exp.id, 'title', e.target.value)} className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-800 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        <input type="text" placeholder="Empresa" value={exp.company} onChange={(e) => onUpdate(exp.id, 'company', e.target.value)} className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-800 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        <div className="flex space-x-2">
            <input type="month" placeholder="Data de Início" value={exp.startDate} onChange={(e) => onUpdate(exp.id, 'startDate', e.target.value)} className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-800 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
            <input type="month" placeholder="Data de Fim" value={exp.endDate} onChange={(e) => onUpdate(exp.id, 'endDate', e.target.value)} className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-800 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        <textarea placeholder="Descrição do cargo e responsabilidades..." value={exp.description} onChange={(e) => onUpdate(exp.id, 'description', e.target.value)} rows={4} className="w-full rounded-md border border-gray-300 p-3 text-gray-800 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        <button onClick={() => onRemove(exp.id)} className="flex items-center text-sm text-red-500 hover:text-red-700">
          <Trash2 className="mr-1 h-4 w-4" /> Remover Experiência
        </button>
      </div>
    ))}
    <button onClick={onAdd} className="flex w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300 py-3 text-gray-500 transition hover:border-blue-500 hover:text-blue-500">
      <Plus className="mr-2 h-5 w-5" /> Adicionar Experiência
    </button>
  </div>
);


//=========== COMPONENTES DO PREVIEW (Preview/) ===========//

const PersonalHeader = ({ info }: { info: PersonalInfo }) => (
    <div className="mb-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800">{info.name}</h1>
        <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-600">
            <a href={`mailto:${info.email}`} className="flex items-center transition hover:text-blue-600"><Mail size={14} className="mr-1.5"/>{info.email}</a>
            <a href={`tel:${info.phone}`} className="flex items-center transition hover:text-blue-600"><Phone size={14} className="mr-1.5"/>{info.phone}</a>
            <a href={`https://${info.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center transition hover:text-blue-600"><Linkedin size={14} className="mr-1.5"/>{info.linkedin}</a>
            <span className="flex items-center"><MapPin size={14} className="mr-1.5"/>{info.location}</span>
        </div>
    </div>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <section className="mb-6">
        <h2 className="mb-3 border-b-2 border-gray-300 pb-1.5 text-xl font-bold uppercase tracking-wide text-gray-700">{title}</h2>
        {children}
    </section>
);


const SkillsSection = ({ skills }: { skills: Skill[] }) => (
    <Section title="Habilidades">
        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            {skills.map(skill => (
                 <div key={skill.id}>
                    <p className="text-sm font-medium text-gray-700">{skill.name}</p>
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                             <Star key={i} size={16} className={`mr-1 ${i < skill.level ? 'text-blue-500' : 'text-gray-300'}`}/>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

const ExperienceSection = ({ experiences }: { experiences: Experience[] }) => (
    <Section title="Experiência Profissional">
        <div className="space-y-4">
            {experiences.map(exp => (
                <div key={exp.id}>
                    <div className="flex justify-between items-baseline">
                        <h3 className="text-lg font-semibold text-gray-800">{exp.title}</h3>
                        <p className="text-sm font-medium text-gray-600">{exp.startDate} - {exp.endDate}</p>
                    </div>
                    <p className="text-md italic text-gray-600">{exp.company}</p>
                    <p className="mt-1 text-sm text-gray-700 whitespace-pre-wrap">{exp.description}</p>
                </div>
            ))}
        </div>
    </Section>
);

const CVPreview = ({ data }: { data: CVData }) => (
  <div className="h-full w-full bg-white p-8 font-serif text-sm shadow-lg">
    <PersonalHeader info={data.personalInfo} />
    <Section title="Resumo Profissional">
        <p className="text-gray-700">{data.personalInfo.summary}</p>
    </Section>
    <SkillsSection skills={data.skills} />
    <ExperienceSection experiences={data.experience} />
  </div>
);

//=========== COMPONENTES PRINCIPAIS (App.tsx) ===========//

const FormSection = ({ cvData, ...handlers }: { cvData: CVData, [key: string]: any }) => {
    const [activeSection, setActiveSection] = useState('personal');

    const renderSection = () => {
        switch(activeSection) {
            case 'personal':
                return <PersonalInfoForm data={cvData.personalInfo} onChange={handlers.handlePersonalInfoChange} />;
            case 'skills':
                return <SkillsForm skills={cvData.skills} onAdd={handlers.addSkill} onUpdate={handlers.updateSkill} onRemove={handlers.removeSkill} onMove={handlers.moveSkill}/>;
            case 'experience':
                return <ExperienceForm experiences={cvData.experience} onAdd={handlers.addExperience} onUpdate={handlers.updateExperience} onRemove={handlers.removeExperience}/>;
            default:
                return null;
        }
    }

    const NavButton = ({ section, children }: { section: string, children: React.ReactNode }) => (
         <button 
            onClick={() => setActiveSection(section)}
            className={`flex-1 rounded-t-lg px-4 py-3 text-sm font-medium transition ${activeSection === section ? 'bg-white text-blue-600 shadow-md' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
         >
            {children}
         </button>
    )

    return (
        <div className="flex h-full flex-col bg-gray-100">
             <nav className="flex bg-gray-200 p-1 shadow-inner">
                <NavButton section="personal">Informações Pessoais</NavButton>
                <NavButton section="skills">Habilidades</NavButton>
                <NavButton section="experience">Experiências</NavButton>
            </nav>
            <div className="flex-grow overflow-y-auto p-6">
                {renderSection()}
            </div>
        </div>
    );
};

const PreviewSection = ({ cvData }: { cvData: CVData }) => (
  <div className="flex h-full items-center justify-center bg-gray-300 p-8">
    <div className="aspect-[210/297] h-full max-h-full overflow-hidden rounded-lg bg-white shadow-2xl">
        <div className="h-full w-full overflow-y-auto">
             <CVPreview data={cvData} />
        </div>
    </div>
  </div>
);


function App() {
  const cvHandlers = useCVData();

  return (
    <main className="grid h-screen w-full grid-cols-1 md:grid-cols-2">
      <FormSection {...cvHandlers} />
      <PreviewSection cvData={cvHandlers.cvData} />
    </main>
  );
}

export default App;

