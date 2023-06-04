import Image from "next/image"
const ListItem_Item = (props) => {
  return (
    <div className={`p-8 font-[11px] tracking-wider xl:absolute xl:bg-white hidden xl:ml-[300px] xl:-mt-8 xl:w-[810px] xl:group-hover:block z-20 ${props.show&&"max-[1115px]:block"}`}>
      <ul>
        <li>
            <div className="xl:flex xl:justify-between">
                <div>
                    <h5>women's fashion</h5>
                    <ul className="p-2 n-li">
                        <li><a href="#">dresses</a></li>
                        <li><a href="#">skirts</a></li>
                        <li><a href="#">westarn wear</a></li>
                        <li><a href="#">ethic wear</a></li>
                        <li><a href="#">sport wear</a></li>
                    </ul>
                    <h5>men's fashion</h5>
                    <ul className="p-2 n-li">
                        <li><a href="#">sports wear</a></li>
                        <li><a href="#">western wear</a></li>
                        <li><a href="#">ethic wear</a></li>
                    </ul>
                </div>
                <div>
                    <h5>accessories</h5>
                    <ul className="p-2 n-li">
                        <li><a href="#">fashion jewellery</a></li>
                        <li><a href="#">caps and hats</a></li>
                        <li><a href="#">precious jewellery</a></li>
                        <li><a href="#">necklaces</a></li>
                        <li><a href="#">earrings</a></li>
                        <li><a href="#">wrist wear</a></li>
                        <li><a href="#">ties</a></li>
                        <li><a href="#">cufflinks</a></li>
                        <li><a href="#">pockets squares</a></li>
                    </ul>
                </div>
                <div>
                    <a href="#">
                        <Image src="/fashion.5172b934.jpg" width={223} height={390} alt="image" className="lg:-mb-10"/>
                    </a>
                </div>
            </div>
        </li>
      </ul>
    </div>
  )
}

export default ListItem_Item