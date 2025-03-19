import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";

export default function Login() {
    return (
        <>
        <div className="flex flex-col md:flex-row mx-auto max-w-screen bg-white text-black md:px-10 px-3 min-h-screen items-center">
                {/* Image Section */}
                <div className="w-full md:w-1/2 max-h-screen flex justify-center items-center overflow-hidden relative md:block hidden">
                    {/* Tambahkan class 'wrapper' di sini */}
                    <div className="grid wrapper grid-cols-3 gap-2 relative">
                        {/* SCROLL CONTAINER #1 */}
                        <div className="scroll-container">
                        <div className="scroll-content">
                            {/* Inner 1 (Set Gambar Pertama) */}
                            <div className="inner">
                            <img className="w-full h-auto rounded-lg py-2" src="/images/loop/image1.png" alt="Image 1" />
                            <img className="w-full h-auto rounded-lg py-2" src="/images/loop/image3.png" alt="Image 3" />
                            <img className="w-full h-auto rounded-lg py-2" src="/images/loop/image5.png" alt="Image 5" />
                            </div>
                            {/* Inner 2 (Duplikasi) */}
                            <div className="inner">
                            <img className="w-full h-auto rounded-lg py-2" src="/images/loop/image1.png" alt="Image 1" />
                            <img className="w-full h-auto rounded-lg py-2" src="/images/loop/image3.png" alt="Image 3" />
                            <img className="w-full h-auto rounded-lg py-2" src="/images/loop/image5.png" alt="Image 5" />
                            </div>
                            {/* Inner 3 (Jika memang mau 3 kali duplikasi) */}
                            <div className="inner">
                            <img className="w-full h-auto rounded-lg py-2" src="/images/loop/image1.png" alt="Image 1" />
                            <img className="w-full h-auto rounded-lg py-2" src="/images/loop/image3.png" alt="Image 3" />
                            <img className="w-full h-auto rounded-lg py-2" src="/images/loop/image5.png" alt="Image 5" />
                            </div>
                        </div>
                        </div>

                        {/* SCROLL CONTAINER #2 (reverse) */}
                        <div className="scroll-container reverse">
                        <div className="scroll-content">
                            <div className="inner">
                                <img className="w-full h-auto rounded-lg py-2" src="/images/loop/image2.png" alt="Image 2" />
                                <img className="w-full h-auto rounded-lg py-2" src="/images/loop/image3.png" alt="Image 3" />
                                <img className="w-full h-auto rounded-lg py-2" src="/images/loop/image4.png" alt="Image 4" />
                            </div>
                            <div className="inner">
                                <img className="w-full h-auto rounded-lg py-2" src="/images/loop/image2.png" alt="Image 2" />
                                <img className="w-full h-auto rounded-lg py-2" src="/images/loop/image3.png" alt="Image 3" />
                                <img className="w-full h-auto rounded-lg py-2" src="/images/loop/image4.png" alt="Image 4" />
                            </div>
                        </div>
                        </div>

                        {/* SCROLL CONTAINER #3 */}
                        <div className="scroll-container">
                        <div className="scroll-content">
                            <div className="inner">
                                <img className="w-full h-auto rounded-lg py-2" src="/images/loop/image1.png" alt="Image 1" />
                                <img className="w-full h-auto rounded-lg py-2" src="/images/loop/image3.png" alt="Image 3" />
                                <img className="w-full h-auto rounded-lg py-2" src="/images/loop/image5.png" alt="Image 5" />
                            </div>
                            <div className="inner">
                                <img className="w-full h-auto rounded-lg py-2" src="/images/loop/image1.png" alt="Image 1" />
                                <img className="w-full h-auto rounded-lg py-2" src="/images/loop/image3.png" alt="Image 3" />
                                <img className="w-full h-auto rounded-lg py-2" src="/images/loop/image5.png" alt="Image 5" />
                            </div>
                            <div className="inner">
                                <img className="w-full h-auto rounded-lg py-2" src="/images/loop/image1.png" alt="Image 1" />
                                <img className="w-full h-auto rounded-lg py-2" src="/images/loop/image3.png" alt="Image 3" />
                                <img className="w-full h-auto rounded-lg py-2" src="/images/loop/image5.png" alt="Image 5" />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="w-full md:w-1/2 py-10 flex justify-center">
                    <div>
                        <img src="/images/moonton.svg" alt="Logo" className="mb-6" />
                        <div className="my-6">
                            <div className="font-semibold text-2xl mb-3">
                                Welcome Back
                            </div>
                            <p className="text-base text-gray-600 leading-7">
                                Explore our new movies and get <br />
                                better insight for your life
                            </p>
                        </div>
                        <form className="w-80">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <label 
                                        forInput="email"
                                        value="Email Address"
                                        placeholder="Email Address"
                                    />
                                    <TextInput
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        required={true}
                                    />
                                </div>
                                <div>
                                    <label
                                        forInput="password"
                                        value="Password"
                                        placeholder="Password"  
                                    />
                                    <TextInput
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-4 mt-6">
                                <a href="/" className="rounded-2xl bg-primary py-3 text-center">
                                    <span className="text-base font-semibold text-white">
                                        Start Watching
                                    </span>
                                </a>
                                <a href="sign_up.html" className="rounded-2xl border border-black py-3 text-center">
                                    <span className="text-base text-black">
                                        Create New Account
                                    </span>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
