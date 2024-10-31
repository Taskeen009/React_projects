import './style.css'
import MenuList from './MenuList';

const Tree=({menus=[]})=>{
    return (
        <div className='tree-view-container'>
         <MenuList list={menus}/>
        </div>
    )
}

export default Tree;