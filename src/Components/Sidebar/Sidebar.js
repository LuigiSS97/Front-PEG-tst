import React from 'react';
import "./Sidebar.css";
import {ReactComponent as BrandIcon} from '../../assets/images/brand.svg'
import {ReactComponent as ActIcon} from '../../assets/images/accounts.svg'
import {ReactComponent as UsersIcon} from '../../assets/images/user.svg'
import {ReactComponent as PerformanceIcon} from '../../assets/images/performance.svg'
import {ReactComponent as DashboardIcon} from '../../assets/images/dashboard.svg'



const Sidebar = () => {
    return (
         <section className="sidebar-container">
            <BrandIcon id='brand-logo'/>
             <div className='sidebar-buttons'>
                <ActIcon className='img-icon'/>
                <label className='labels'>Minhas Atividades</label>
             </div>
             <div className='sidebar-buttons'>
                <ActIcon className='img-icon'/>
                <label className='labels'>Todas as contas</label>
             </div><div className='sidebar-buttons'>
                <UsersIcon className='img-icon'/>
                <label className='labels'>Usuários</label>
             </div><div className='sidebar-buttons'>
                <PerformanceIcon className='img-icon'/>
                <label className='labels'>Desempenho</label>
             </div><div className='sidebar-buttons'>
                <DashboardIcon className='img-icon'/>
                <label className='labels'>Dashboard</label>
             </div>
         </section>
    )
}

export default Sidebar;