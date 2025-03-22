import { createRoot } from "react-dom/client";
import Navbar from "./components/navbar";
import Content from "./components/Content";
import History from "./components/History";
import "./index.css"
const root = createRoot(document.getElementById("root"));


root.render(<h1>
    <Navbar />
    <History />
    <h1 className="font-bold text-3xl pb-[20px] ">Tourist Places</h1>

    <div className="flex gap-10 w-[90%] flex-wrap m-auto justify-between mt-[20px]">
        <Content
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIZ6_KRuPVonMSJ_SBweP2UK-BsQvEh69Few&s"
            name="Gondeshwar Mandir"
            category="Historic, Religious"
            desc="Gondeshwar Mandir, a 12th-century Hindu temple in Maharashtra, showcases stunning Hemadpanthi architecture and intricate carvings.."
        />
        <Content
            image="https://i.ytimg.com/vi/UfvWZuwT2D0/sddefault.jpg"
            name="Bhagwati Devi temple"
            category=" Historic, Religious"
            desc="Bhagwati Devi Temple, a revered Hindu shrine, honors Goddess Bhagwati with vibrant festivals and spiritual significance."
        />
        <Content
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWf86uBfIzWRDNPdWH8ewV0Op5bO1MFBLwqw&s"
            name=" Bhagwati Vadapav Sinnar"
            category=" Famous Dish"
            desc="Bhagwati Vadapav in Sinnar is famous for its spicy, flavorful vadapav, attracting food lovers daily."
        />
        <Content
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaMBniaBWNpgE1-Lpx75uUGmLGL7874SNrQ&s"
            name="Bhairavnath mandir"
            category="Religious/Historic"
            desc="Bhairavnath Mandir, the Gramdevta of the village, is a sacred temple known for divine blessings.The temple was first built during the reign of King Jagjjyoti Malla"
        />
        <Content
            image="https://c8.alamy.com/comp/2G204GG/16-apr-2009-this-larger-than-life-size-red-ganapati-big-ganesh-at-sinnar-district-nasik-maharashtra-india-2G204GG.jpg"
            name="Mahaganpati mandir "
            category="Religious/Historic"
            desc="Mahaganpati Mandir in Sinnar is a revered temple dedicated to Lord Ganesha, attracting many devotees."
        />
        <Content
            image="https://drifteradwait.com/wp-content/uploads/GOPR3764-1024x768.jpg"
            name="gargoti museum "
            category=" Natural History Museum"
            desc="Gargoti Museum in Sinnar showcases stunning mineral, gemstone, and fossil collections, attracting geology enthusiasts worldwide."
        />

    </div>

</h1>
)
