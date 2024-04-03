import { useNavigate } from "react-router-dom";
import "./poems.css"
import Header from "../../Components/Header/header";

export default function Poems(){
    const navigate = useNavigate();

    return (
        <div id="poem">
        <Header message={"Poems"}></Header>
        <p>Rupi Kaur, is one of my favorite Poetry Authors of all time. She speaks to me in ways no other can. I would recommend her to anyone who has ever been through heartache and pain in their lives.</p>
        <a href="https://rupikaur.com/pages/all-books">Click Me!</a>
<hr/>
        <p>Just found these poems by a man named "Rumi", he is known be one of the most popular poets. Here I have sent links to the poems and the books associated with his works.</p>
        <a href="https://www.rumi.org.uk/poetry/">Click Me!</a>

        <a href="https://www.thriftbooks.com/a/rumi/201835/">Click Me!</a>
        </div>
    )
}