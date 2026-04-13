import { BarChart3, ShieldCheck, Users } from 'lucide-react';
import logoBranca from '../../../assets/logoBranca.svg'
import imageMonitor from '../../../assets/imageMonitor.png'

export const LoginSidebar: React.FC = () => { 
    const infoItems = [
        { id: 1, icon: BarChart3, title: 'Relatórios em Tempo real', desc: 'Destaca a função principal de centralização e gerenciamento das informações.' },
        { id: 2, icon: ShieldCheck, title: 'Dados Centralizados', desc: 'Destaca a função principal de centralização e gerenciamento das informações.' },
        { id: 3, icon: Users, title: 'Governança', desc: 'Destaca a função principal de centralização e gerenciamento das informações.' }
    ];    
    
    return(
        <aside className='hidden lg:flex flex-col justify-between w-2/5 p-12 bg-blue-950 text-white overflow-hidden'>
            <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-14'>
                    <img src={ logoBranca } alt='Logo' className='w-18 h-18'/>
                    <h1 className='text-3xl font-bold'>Portal de Dados de Governança</h1>
                </div>

                <nav className='space-y-8'>
                    { infoItems.map((item, id) => (
                        <div key={ id } className='flex gap-4 items-start'>       
                            <div className='p-3 bg-white/10 rounded-lg'>
                                <item.icon className='w-6 h-6 text-blue-300'/>                       
                            </div>   
                            <div>
                                <h2 className='text-xl font-semibold'>{ item.title }</h2>
                                <p className='text-sm text-gray-300 max-w-sm'>{item.desc}</p>
                            </div>             
                        </div>
                    )) }
                </nav>
            </div>
                <div className='relative mt-12 flex items-center'>
                    <div className='absolute -ml-12 left-0 top-2/3 -translate-y-1/2 h-30 w-[86%] bg-white/10 rounded-r-full'></div>
                    <img 
                        src={ imageMonitor } 
                        alt='Imagem do monitor' 
                        className='relative z-20 w-full max-w-lg'
                    />
                </div>
            <footer className='-mx-12 -mb-12'>
            <div className='-mx-12 mb-4 border-t border-white/5'></div>
                <p className='text-[1rem] bg-white/10 py-4 px-6 text-center leading-relaxed'>
                    @2026 CGSTI | IPLAM - Instituto de Pesquisa, Planejamento e licenciamento Urbano e Ambiental de Maceió
                </p>
            </footer>
        </aside>
    );
}