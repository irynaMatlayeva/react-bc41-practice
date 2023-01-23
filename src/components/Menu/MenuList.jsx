
import MenuItem from "./MenuItem"
import { menuConfig } from "constants/menu"


const MenuList = () => {
	console.log(menuConfig)
return (<nav>
	<ul>
		{menuConfig.map(({name, link, img}) => 
			<MenuItem key={name} name={name} link={link} image={img}/>
		)}
	</ul>
</nav>

)}

export default MenuList