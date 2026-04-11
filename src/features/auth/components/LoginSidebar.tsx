import { BarChart3, ShieldCheck, Users } from 'lucide-react';

export const LoginSidebar: React.FC = () => { 
    const infoItems = [
        {id: 1, icon: BarChart3, title: 'Relatórios em Tempo real', desc: 'Destaca a função principal de centralização e gerenciamento das informações.' },
        {id: 2, icon: ShieldCheck, title: 'Dados Centralizados', desc: 'Destaca a função principal de centralização e gerenciamento das informações.' },
        {id: 3, icon: Users, title: 'Governança', desc: 'Destaca a função principal de centralização e gerenciamento das informações.' }
    ];    
    
    return(
        <aside className='hidden lg:flex flex-col justify-between w-2/5 p-12 bg-blue-950 text-white'>
            <div>
                <div className='flex items-center gap-3 mb-16'>
                    <ShieldCheck size={40} className='text-blue-400'/>
                    <h1 className='text-3xl font-bold'>Portal de Dados de Governança</h1>
                </div>

                <nav className='space-y-10'>
                    {infoItems.map((item, id) => (
                        <div key={id} className='flex gap-4 items-start'>       
                            <div className='p-3 bg-white/10 rounded-lg'>
                                <item.icon className='w-6 h-6 text-blue-300'/>                       
                            </div>   
                            <div>
                                <h2 className='text-xl font-semibold'>{item.title}</h2>
                                <p className='text-sm text-gray-300 max-w-sm'>{item.desc}</p>
                            </div>             
                        </div>
                    ))}
                </nav>
            </div>
        </aside>
    );
}