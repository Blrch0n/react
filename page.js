import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Part1 } from "@/components/Part1";
import { Part2 } from "@/components/Part2";
import { Part3 } from "@/components/Part3";
import { Part4 } from "@/components/Part4";
import { Part5 } from "@/components/Part5";
import { Part6 } from "@/components/Part6";

export default function Home() {
    return (
        <section className='flex flex-col w-full h-fit items-center bg-white'>
            <Header></Header>
            <Part1></Part1>
            <Part2></Part2>
            <Part3></Part3>
            <Part4></Part4>
            <Part5></Part5>
            <Part6></Part6>
            <Footer></Footer>
        </section>
        
    )
}
