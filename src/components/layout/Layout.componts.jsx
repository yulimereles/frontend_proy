import { Header } from "../Header.components"
import { Chatbot } from "../layout/Chatbot"
import { ToastContainer } from 'react-toastify';
import LottiePlayer from "./Lottie.component";

export const Layout = () => {


   
    return (
        <>
            <div className="">
                    <Header />
                    <ToastContainer />

                    <main className={`$ "bg-slate-900" : "bg-gray-200"} 
                    mx-auto text-center w-full flex flex-col pl-12`}>
                        <section className="z-10">
                            
                        </section>

                        <Chatbot />
                    </main>
                </div >
                <section 
        
        className="min-h-screen bg-white">
        <div className=" px-4 sm:px-6 lg:px-8 py-16 text-center">

            <div className='flex flex-col items-center md:flex-row md:justify-between md:items-center'>
                
                <div className='max-w-lg mb-8 md:mb-0'>
                    <h1 className="text-center text-5xl font-bold tracking-tight text-gray-900">
                        Impulsa tu aprendizaje con{" "}
                        <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
                            CodeTrain + IA
                        </span>
                    </h1>
                    <p className="mt-4 text-xl pb-2 text-gray-500">
                        La plataforma potenciada con Inteligencia Artificial para lleva tu rendimiento y aprendizaje al siguiente nivel.
                    </p>

                   
                </div>

                <div className='flex justify-center text-center md:justify-end'>
                    <LottiePlayer />
                </div>
                </div>
         </div>

        </section>
        </>
    )
}