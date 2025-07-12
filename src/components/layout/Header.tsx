import { WishlistButton } from "../user/WishlistButton"
import { UserButton } from "../user/UserButton"
import { CartButton } from "../cart/CartButton"
import { SearchBar } from "../filters/SearchBar"


export const Header = () => {
  return (
    <header>
      <div className="topbar  bg-purple-dark w-full h-6"></div>
      <div className="header-container items-center justify-between my-4 mx-5 flex flex-col lg:flex-row">
        <div className="logo mb-5  lg:w-1/2 ">
          <img src="/logo.png" alt="logo" className="logo" />
        </div>
        <div className="right-column w-full flex flex-row items-center justify-between">
          <SearchBar />
          <div className="buttons">
            <WishlistButton onClick={() => { }} />
            <UserButton onClick={() => { }} />
            <CartButton onClick={() => { }} />
          </div>
        </div>
      </div>
    </header>
  )
}
