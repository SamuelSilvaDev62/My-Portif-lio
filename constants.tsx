import { Project, ProjectCategory, Skill } from './types';
import { Layout, Globe, Smartphone, Server, Cpu, Code, Database, Terminal } from 'lucide-react';
import React from 'react';

// Função auxiliar para gerar URLs de preview usando o serviço thum.io
// Usamos width/800 para boa resolução e noanimate para imagem estática
const getPreviewUrl = (url: string) => `https://image.thum.io/get/width/800/crop/600/noanimate/${url}`;

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Prime Li Bistrô',
    description: 'Website elegante e moderno para bistrô com apresentação de cardápio e ambiente.',
    category: ProjectCategory.WEBSITE,
    imageUrl: getPreviewUrl('https://primelibistro.netlify.app/'),
    tech: ['React', 'Netlify', 'UI Design'],
    link: 'https://primelibistro.netlify.app/'
  },
  {
    id: '2',
    title: 'Nando Johnny Barbearia',
    description: 'Landing page estilizada para barbearia com foco em conversão e identidade visual.',
    category: ProjectCategory.WEBSITE,
    imageUrl: getPreviewUrl('https://nando-johnny-barbearia-zo5hj35.gamma.site/'),
    tech: ['Gamma', 'Web Design', 'UX'],
    link: 'https://nando-johnny-barbearia-zo5hj35.gamma.site/'
  },
  {
    id: '3',
    title: 'Inglês Prático',
    description: 'Aplicação interativa focada no aprendizado prático e rápido do idioma inglês.',
    category: ProjectCategory.APP,
    imageUrl: getPreviewUrl('https://inglespratico.lovable.app/'),
    tech: ['Lovable', 'React', 'Education Tech'],
    link: 'https://inglespratico.lovable.app/'
  },
  {
    id: '4',
    title: 'Amigo Secreto Fácil',
    description: 'Sistema web app para organização e sorteio de amigo secreto de forma simplificada.',
    category: ProjectCategory.APP,
    imageUrl: getPreviewUrl('https://amigosecretofacil.base44.app'),
    tech: ['PWA', 'Base44', 'System Logic'],
    link: 'https://amigosecretofacil.base44.app'
  },
  {
    id: '5',
    title: 'Portal Region Imóvel',
    description: 'Plataforma completa para listagem e busca de imóveis na região.',
    category: ProjectCategory.APP,
    imageUrl: getPreviewUrl('https://portal-region-imovel.lovable.app'),
    tech: ['Lovable', 'Database', 'Real Estate'],
    link: 'https://portal-region-imovel.lovable.app'
  },
  {
    id: '6',
    title: 'Bio Link Hub',
    description: 'Agregador de links centralizado para redes sociais com design personalizado.',
    category: ProjectCategory.LINKBIO,
    imageUrl: getPreviewUrl('https://genuine-kitten-6a2390.netlify.app/'),
    tech: ['React', 'Netlify', 'Social Integration'],
    link: 'https://genuine-kitten-6a2390.netlify.app/'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 95, icon: 'code' },
  { name: 'TypeScript', level: 90, icon: 'cpu' },
  { name: 'UI / UX Design', level: 85, icon: 'layout' },
  { name: 'Node.js / API', level: 80, icon: 'server' },
  { name: 'Database', level: 75, icon: 'database' },
];

export const ICONS = {
  Web: <Globe className="w-4 h-4" />,
  App: <Smartphone className="w-4 h-4" />,
  Sys: <Server className="w-4 h-4" />,
  Bio: <Layout className="w-4 h-4" />,
  Tech: <Cpu className="w-4 h-4" />,
  Code: <Code className="w-4 h-4" />,
  Db: <Database className="w-4 h-4" />,
  Term: <Terminal className="w-4 h-4" />
};