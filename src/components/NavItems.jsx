function NavItems({menu, activeTab, handleClick}) {
    return(
        <div className = "flex gap-x-8">
            {menu.map((item, index) => (
                <a onClick = {() => handleClick(item.title)} className={activeTab !== item.title ? 'text-black' : "text [#19918f] font-bold"} key={index} href={item.link}>{item.title}</a>
            ))}
        </div>
    )
}

export default NavItems