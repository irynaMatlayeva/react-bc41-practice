
import UserImg from '../../assets/images/mock-user-ava.svg'
import MenuList from 'components/Menu/MenuList'


const SideBar = () => {
	return (<aside>
		<div>Title</div>
		<MenuList/>
		<div><img src={UserImg} alt="User" />Бил Гейтс</div>
	</aside>)
}
export default SideBar