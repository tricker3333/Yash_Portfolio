import React, { useRef, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const useAnimateWidth = (ref, width) => {
  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        element.style.transition = "width 2s ease-in-out";
        element.style.width = width;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, width]);
};

function Main() {
  AOS.init();
  const divRef1 = useRef(null);
  const divRef2 = useRef(null);
  const divRef3 = useRef(null);
  const divRef4 = useRef(null);

  useAnimateWidth(divRef1, "86%");
  useAnimateWidth(divRef2, "90%");
  useAnimateWidth(divRef3, "80%");
  useAnimateWidth(divRef4, "95%");

  return (
    <div className="">
      <div className="">
        {/* Home section start here */}
        <section className="home pt-14">
          <div className=" absolute top-0 left-0 w-full h-full overflow-hidden">
            <div
              className="bg-img"
              style={{
                width: "100%",
                height: "140%",
                transform: "translateY(-29.79px)",
              }}
            ></div>
          </div>

          <div class=" bg-black absolute w-full h-full left-0 top-0 opacity-50"></div>

          <div className="flex relative items-center flex-wrap min-h-[700px] max-w-[767px] md:max-w-[1024px] lg:max-w-[1140px] mx-auto">
            <div className=" relative min-h-[1px] flex md:w-[20%]">
              <div className="flex relative flex-wrap content-start"></div>
            </div>

            <div className=" md:w-[60%] relative flex flex-col">
              <div className=" relative flex flex-wrap content-start justify-center w-full p-[10px] flex-col">
                <div
                  className=" text-center mb-5"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className=" mb-[-10px]">
                    <h2 className=" text-white text-[2.5em] md:text-[4em] font-thin uppercase leading-[1em] tracking-[-3px]">
                      Hello!
                    </h2>
                  </div>
                </div>

                <div
                  className=" text-center mb-5"
                  data-aos="fade-up"
                  data-aos-duration="2250"
                >
                  <div className="mb-[-15px]">
                    <h1 className=" text-white text-[2.5em] md:text-[3.5em] lg:text-[4em] font-semibold leading-[1em]  tracking-[-1px] md:tracking-[-3px]">
                      I'm Awadhesh Gupta
                    </h1>
                  </div>
                </div>

                <div
                  className=" text-center mb-5"
                  data-aos="fade-up"
                  data-aos-duration="2500"
                >
                  <div className="">
                    <h1 className=" text-white text-[1.2em] md:text-[2em] font-medium leading-[1.3em] tracking-[0px]">
                      Full Stack Web Developer
                    </h1>
                  </div>
                </div>

                <div
                  className=" text-center text-[#ffffffde] text-sm font-normal leading-[1.5em] tracking-[0px] mb-10"
                  data-aos="fade-up"
                  data-aos-duration="2750"
                >
                  <div className="">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo. Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>

                <div
                  className=" text-center z-10"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <div className="">
                    <img
                      width="20"
                      height="200"
                      src="https://kits.focuxtheme.com/indev/wp-content/uploads/sites/3/2021/11/vertical-line.png"
                      className=" max-w-full h-auto align-middle inline-block"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[1px] flex md:w-[20%]">
              <div className="flex relative flex-wrap content-start"></div>
            </div>
          </div>
        </section>
        {/* Home section ends here */}

        {/* Experience section start here */}
        <section className="experience relative pt-14 bg-[#2b1ec2] mt-[-150px]">
          <div className=" min-h-[461px] mx-auto relative flex flex-wrap max-w-[767px] md:max-w-[1024px] lg:max-w-[1140px]">
            <div className=" w-full relative flex">
              <div className=" flex content-center items-center p-[30px] relative flex-wrap w-full">
                <section className=" w-full relative">
                  <div className=" mx-auto relative flex justify-center flex-wrap max-w-[767px] md:max-w-[1024px] lg:max-w-[1140px]">
                    <div
                      className=" w-full md:w-[33.33%] flex relative"
                      data-aos="fade-right"
                      data-aos-duration="2000"
                    >
                      <div className=" flex relative flex-wrap w-full items-center content-center p-0 lg:p-[30px]">
                        <div className=" mb-5 w-full">
                          <div className="">
                            <h2 className="text-white text-[1.5em] lg:text-[2.5em] font-semibold uppercase leading-[1.2em] lg:leading-[1em] tracking-[0px]">
                              10 Years Experience On Web Development.
                            </h2>
                          </div>
                        </div>

                        <div className=" text-white text-[14px] font-normal leading-[1.5em] tracking-[0px]">
                          <div className="">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ut elit tellus, luctus nec ullamcorper
                              mattis, pulvinar dapibus leo.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className=" w-full md:w-[33.33%] flex relative"
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <div className="flex relative flex-wrap w-full items-center content-center py-10 md:p-[30px]">
                        <div className=" w-full text-center relative">
                          <div className="">
                            <img
                              width="616"
                              height="900"
                              src="https://kits.focuxtheme.com/indev/wp-content/uploads/sites/3/2021/11/young-businessman-wearing-glasses-in-the-office-SNBP3XK.jpg"
                              className=" align-middle inline-block h-auto max-w-full"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className=" w-full md:w-[33.33%] flex relative"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                    >
                      <div className="flex relative flex-wrap w-full items-center content-center p-0 lg:p-[30px]">
                        <div className=" mb-5 text-left w-full">
                          <div className=" text-left">
                            <span className=" text-white text-base leading-[2.5em] tracking-[0px] font-medium">
                              Python
                            </span>

                            <div className=" bg-[#00000045] text-white h-full rounded-sm text-left">
                              <div
                                ref={divRef1}
                                className=" w-0 duration-1000 transition-all ease-in-out bg-white h-[5px] leading-[5px] text-black font-normal text-xs flex rounded-sm"
                              >
                                <span className=" whitespace-nowrap overflow-hidden grow pl-[15px] text-ellipsis"></span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className=" mb-5 text-left w-full">
                          <div className=" text-left">
                            <span className=" text-white text-base leading-[2.5em] tracking-[0px] font-medium">
                              React Js
                            </span>

                            <div className=" bg-[#00000045] text-white h-full rounded-sm text-left">
                              <div
                                ref={divRef2}
                                className=" w-0 bg-white h-[5px] leading-[5px] text-black font-normal text-xs flex rounded-sm"
                              >
                                <span className=" whitespace-nowrap overflow-hidden grow pl-[15px] text-ellipsis"></span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className=" mb-5 text-left w-full">
                          <div className=" text-left">
                            <span className=" text-white text-base leading-[2.5em] tracking-[0px] font-medium">
                              Laravel
                            </span>

                            <div className=" bg-[#00000045] text-white h-full rounded-sm text-left">
                              <div
                                ref={divRef3}
                                className=" w-0 bg-white h-[5px] leading-[5px] text-black font-normal text-xs flex rounded-sm"
                              >
                                <span className=" whitespace-nowrap overflow-hidden grow pl-[15px] text-ellipsis"></span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className=" mb-5 text-left w-full">
                          <div className=" text-left">
                            <span className=" text-white text-base leading-[2.5em] tracking-[0px] font-medium">
                              Veu
                            </span>

                            <div className=" bg-[#00000045] text-white h-full rounded-sm text-left">
                              <div
                                ref={divRef4}
                                className=" w-0 bg-white h-[5px] leading-[5px] text-black font-normal text-xs flex rounded-sm"
                              >
                                <span className=" whitespace-nowrap overflow-hidden grow pl-[15px] text-ellipsis"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="pt-14 w-full relative">
                  <div className="mx-auto relative flex flex-wrap max-w-[767px] md:max-w-[1024px] lg:max-w-[1140px]">
                    <div
                      className=" md:w-1/2 relative flex min-h-[1px]"
                      data-aos="fade-right"
                      data-aos-duration="2000"
                    >
                      <div className=" content-center items-center py-10 md:p-10 flex relative w-full md:border-r flex-col">
                        <div className="mb-5">
                          <div className="">
                            <div className=" text-left md:text-right md:flex-row-reverse md:flex items-start">
                              <div className=" mr-4 md:ml-4">
                                <span className=" fill-white border-white text-white w-6 h-6 inline-block text-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                                  </svg>
                                </span>
                              </div>

                              <div className="grow text-left md:text-right">
                                <div className=" text-base lg:text-[1.2em] font-medium leading-[1.5em] mb-[9px] text-white">
                                  <span>2010 - 2014 ABC Company </span>
                                </div>

                                <p className=" text-[#ffffffd4] text-sm font-normal leading-[1.5em]">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Ut elit tellus, luctus nec
                                  ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mb-5">
                          <div className="">
                            <div className="text-left md:text-right md:flex-row-reverse md:flex items-start">
                              <div className="mr-4 md:ml-4">
                                <span className=" fill-white border-white text-white w-6 h-6 inline-block text-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                                  </svg>
                                </span>
                              </div>

                              <div className="grow text-left md:text-right">
                                <div className=" text-base lg:text-[1.2em] font-medium leading-[1.5em] mb-[9px] text-white">
                                  <span>2014 - 2016 X Software Company </span>
                                </div>

                                <p className=" text-[#ffffffd4] text-sm font-normal leading-[1.5em]">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Ut elit tellus, luctus nec
                                  ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="">
                          <div className="">
                            <div className=" text-left md:text-right md:flex-row-reverse md:flex items-start">
                              <div className="mr-4 md:ml-4">
                                <span className=" fill-white border-white text-white w-6 h-6 inline-block text-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                                  </svg>
                                </span>
                              </div>

                              <div className="grow text-left md:text-right">
                                <div className=" text-base lg:text-[1.2em] font-medium leading-[1.5em] mb-[9px] text-white">
                                  <span>2017 - Now Freelancer </span>
                                </div>

                                <p className=" text-[#ffffffd4] text-sm font-normal leading-[1.5em]">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Ut elit tellus, luctus nec
                                  ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className=" md:w-1/2 relative flex min-h-[1px]"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                    >
                      <div className="content-center md:p-10 flex relative w-full flex-col">
                        <div className=" mb-5 relative w-full">
                          <div className="">
                            <h2 className=" text-white text-[2rem] font-medium leading-[1]">
                              My Work Experience
                            </h2>
                          </div>
                        </div>

                        <div className=" text-white text-base font-normal leading-[1.5em] mb-5">
                          <div className="elementor-widget-container">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ut elit tellus, luctus nec ullamcorper
                              mattis, pulvinar dapibus leo.
                            </p>
                          </div>
                        </div>

                        <div className=" ">
                          <div className="text-left ">
                            <div className="w-full inline-block text-left">
                              <span className=" inline-block break-words mr-2">
                                <a className="rounded-[10%]" target="_blank">
                                  <span className=" absolute top-[-10000em] overflow-hidden">
                                    Facebook
                                  </span>

                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    className="w-8 h-8 text-white fill-white"
                                  >
                                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                                  </svg>
                                </a>
                              </span>

                              <span className=" inline-block break-words mr-2">
                                <a className="rounded-[10%]" target="_blank">
                                  <span className=" absolute top-[-10000em] overflow-hidden">
                                    Facebook
                                  </span>

                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    className="w-8 h-8 text-white fill-white"
                                  >
                                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                                  </svg>
                                </a>
                              </span>

                              <span className=" inline-block break-words">
                                <a className="rounded-[10%]" target="_blank">
                                  <span className=" absolute top-[-10000em] overflow-hidden">
                                    Facebook
                                  </span>

                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    className="w-8 h-8 text-white fill-white"
                                  >
                                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                                  </svg>
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        {/* Experience section ends here */}

        {/* Portfolio section starts here */}
        <section className="portfolio relative py-[70px] md:pt-10 md:pb-24 bg-[#2b1ec2]">
          <div className="min-h-[500px] mx-auto relative flex flex-wrap items-center">
            <div className="w-full relative flex">
              <div className=" flex relative w-full flex-wrap content-start">
                <div
                  className=" text-center w-full mb-5"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className=" mb-[-15px]">
                    <h2 className=" text-white text-[3em] font-semibold leading-[1em] tracking-[-2px]">
                      Portfolio
                    </h2>
                  </div>
                </div>

                <div
                  className="text-center w-full mb-5"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className=" mb-8">
                    <div className="text-white text-[1.2em] font-normal leading-[1.5em] tracking-[0px]">
                      I Served For More Than 1000 Customers
                    </div>
                  </div>
                </div>

                <section className=" w-full relative">
                  <div className="mx-auto relative flex flex-wrap max-w-[767px] md:max-w-[1024px] lg:max-w-[1140px]">
                    <div
                      className=" w-full md:w-[33.33%] relative md:flex"
                      data-aos="fade-right"
                      data-aos-duration="2000"
                    >
                      <div className=" p-[10px] flex relative flex-wrap content-start">
                        <div className=" w-full relative">
                          <div className=" overflow-hidden">
                            <div className="group block relative">
                              <div className=" absolute top-0 left-0 right-0 bottom-0 w-full z-[1] overflow-hidden">
                                <div className="work-img group-hover:scale-125"></div>

                                <div className=" group-hover:bg-[#0000008f] z-[2] absolute top-0 right-0 left-0 bottom-0 group-hover:ransition-all group-hover:ease-in-out"></div>
                              </div>

                              <div className=" p-9 pt-14 text-center min-h-[280px] relative text-white group-hover:z-[2]  group-hover:translate-y-[0px] translate-y-[500px] group-hover:transition-all group-hover:ease-in-out group-hover:duration-1000 group-hover:delay-75">
                                <h5 className=" text-[1.2em] font-medium leading-[1.3em] text-white tracking-[0px] mb-[15px]">
                                  SurvForm Plugin
                                </h5>

                                <div className=" mb-[30px] text-sm font-normal leading-[1.5em] tracking-[0px]">
                                  Lorem ipsum dolor sit amet consectetur
                                  adipiscing elit dolor
                                </div>

                                <div className=" text-center relative text-white">
                                  <a
                                    className=" text-sm font-medium leading-[1.2em] bg-[#2A1BD7] border-[#2A1BD7] text-white py-[10px] px-5 rounded-sm"
                                    href="/"
                                  >
                                    Learn More
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="w-full md:w-[33.33%] relative md:flex"
                      data-aos="fade-down"
                      data-aos-duration="2000"
                    >
                      <div className=" p-[10px] flex relative flex-wrap content-start">
                        <div className=" w-full relative">
                          <div className=" overflow-hidden">
                            <div className="group block relative">
                              <div className=" absolute top-0 left-0 right-0 bottom-0 w-full z-[1] overflow-hidden">
                                <div className="work-img group-hover:scale-125"></div>

                                <div className=" group-hover:bg-[#0000008f] z-[2] absolute top-0 right-0 left-0 bottom-0 group-hover:ransition-all group-hover:ease-in-out"></div>
                              </div>

                              <div className=" p-9 pt-14 text-center min-h-[280px] relative text-white group-hover:z-[2]  group-hover:translate-y-[0px] translate-y-[500px] group-hover:transition-all group-hover:ease-in-out group-hover:duration-1000 group-hover:delay-75">
                                <h5 className=" text-[1.2em] font-medium leading-[1.3em] text-white tracking-[0px] mb-[15px]">
                                  SurvForm Plugin
                                </h5>

                                <div className=" mb-[30px] text-sm font-normal leading-[1.5em] tracking-[0px]">
                                  Lorem ipsum dolor sit amet consectetur
                                  adipiscing elit dolor
                                </div>

                                <div className=" text-center relative text-white">
                                  <a
                                    className=" text-sm font-medium leading-[1.2em] bg-[#2A1BD7] border-[#2A1BD7] text-white py-[10px] px-5 rounded-sm"
                                    href="/"
                                  >
                                    Learn More
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="w-full md:w-[33.33%] relative md:flex"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                    >
                      <div className=" p-[10px] flex relative flex-wrap content-start">
                        <div className=" w-full relative">
                          <div className=" overflow-hidden">
                            <div className="group block relative">
                              <div className=" absolute top-0 left-0 right-0 bottom-0 w-full z-[1] overflow-hidden">
                                <div className="work-img group-hover:scale-125"></div>

                                <div className=" group-hover:bg-[#0000008f] z-[2] absolute top-0 right-0 left-0 bottom-0 group-hover:ransition-all group-hover:ease-in-out"></div>
                              </div>

                              <div className=" p-9 pt-14 text-center min-h-[280px] relative text-white group-hover:z-[2]  group-hover:translate-y-[0px] translate-y-[500px] group-hover:transition-all group-hover:ease-in-out group-hover:duration-1000 group-hover:delay-75">
                                <h5 className=" text-[1.2em] font-medium leading-[1.3em] text-white tracking-[0px] mb-[15px]">
                                  SurvForm Plugin
                                </h5>

                                <div className=" mb-[30px] text-sm font-normal leading-[1.5em] tracking-[0px]">
                                  Lorem ipsum dolor sit amet consectetur
                                  adipiscing elit dolor
                                </div>

                                <div className=" text-center relative text-white">
                                  <a
                                    className=" text-sm font-medium leading-[1.2em] bg-[#2A1BD7] border-[#2A1BD7] text-white py-[10px] px-5 rounded-sm"
                                    href="/"
                                  >
                                    Learn More
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className=" w-full relative">
                  <div className="mx-auto relative flex flex-wrap max-w-[767px] md:max-w-[1024px] lg:max-w-[1140px]">
                    <div
                      className=" w-full md:w-[33.33%] relative md:flex"
                      data-aos="fade-right"
                      data-aos-duration="2000"
                    >
                      <div className=" p-[10px] flex relative flex-wrap content-start">
                        <div className=" w-full relative">
                          <div className=" overflow-hidden">
                            <div className="group block relative">
                              <div className=" absolute top-0 left-0 right-0 bottom-0 w-full z-[1] overflow-hidden">
                                <div className="work-img group-hover:scale-125"></div>

                                <div className=" group-hover:bg-[#0000008f] z-[2] absolute top-0 right-0 left-0 bottom-0 group-hover:ransition-all group-hover:ease-in-out"></div>
                              </div>

                              <div className=" p-9 pt-14 text-center min-h-[280px] relative text-white group-hover:z-[2]  group-hover:translate-y-[0px] translate-y-[500px] group-hover:transition-all group-hover:ease-in-out group-hover:duration-1000 group-hover:delay-75">
                                <h5 className=" text-[1.2em] font-medium leading-[1.3em] text-white tracking-[0px] mb-[15px]">
                                  SurvForm Plugin
                                </h5>

                                <div className=" mb-[30px] text-sm font-normal leading-[1.5em] tracking-[0px]">
                                  Lorem ipsum dolor sit amet consectetur
                                  adipiscing elit dolor
                                </div>

                                <div className=" text-center relative text-white">
                                  <a
                                    className=" text-sm font-medium leading-[1.2em] bg-[#2A1BD7] border-[#2A1BD7] text-white py-[10px] px-5 rounded-sm"
                                    href="/"
                                  >
                                    Learn More
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className=" w-full md:w-[33.33%] relative md:flex"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <div className=" p-[10px] flex relative flex-wrap content-start">
                        <div className=" w-full relative">
                          <div className=" overflow-hidden">
                            <div className="group block relative">
                              <div className=" absolute top-0 left-0 right-0 bottom-0 w-full z-[1] overflow-hidden">
                                <div className="work-img group-hover:scale-125"></div>

                                <div className=" group-hover:bg-[#0000008f] z-[2] absolute top-0 right-0 left-0 bottom-0 group-hover:ransition-all group-hover:ease-in-out"></div>
                              </div>

                              <div className=" p-9 pt-14 text-center min-h-[280px] relative text-white group-hover:z-[2]  group-hover:translate-y-[0px] translate-y-[500px] group-hover:transition-all group-hover:ease-in-out group-hover:duration-1000 group-hover:delay-75">
                                <h5 className=" text-[1.2em] font-medium leading-[1.3em] text-white tracking-[0px] mb-[15px]">
                                  SurvForm Plugin
                                </h5>

                                <div className=" mb-[30px] text-sm font-normal leading-[1.5em] tracking-[0px]">
                                  Lorem ipsum dolor sit amet consectetur
                                  adipiscing elit dolor
                                </div>

                                <div className=" text-center relative text-white">
                                  <a
                                    className=" text-sm font-medium leading-[1.2em] bg-[#2A1BD7] border-[#2A1BD7] text-white py-[10px] px-5 rounded-sm"
                                    href="/"
                                  >
                                    Learn More
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className=" w-full md:w-[33.33%] relative md:flex"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                    >
                      <div className=" p-[10px] flex relative flex-wrap content-start">
                        <div className=" w-full relative">
                          <div className=" overflow-hidden">
                            <div className="group block relative">
                              <div className=" absolute top-0 left-0 right-0 bottom-0 w-full z-[1] overflow-hidden">
                                <div className="work-img group-hover:scale-125"></div>

                                <div className=" group-hover:bg-[#0000008f] z-[2] absolute top-0 right-0 left-0 bottom-0 group-hover:ransition-all group-hover:ease-in-out"></div>
                              </div>

                              <div className=" p-9 pt-14 text-center min-h-[280px] relative text-white group-hover:z-[2]  group-hover:translate-y-[0px] translate-y-[500px] group-hover:transition-all group-hover:ease-in-out group-hover:duration-1000 group-hover:delay-75">
                                <h5 className=" text-[1.2em] font-medium leading-[1.3em] text-white tracking-[0px] mb-[15px]">
                                  SurvForm Plugin
                                </h5>

                                <div className=" mb-[30px] text-sm font-normal leading-[1.5em] tracking-[0px]">
                                  Lorem ipsum dolor sit amet consectetur
                                  adipiscing elit dolor
                                </div>

                                <div className=" text-center relative text-white">
                                  <a
                                    className=" text-sm font-medium leading-[1.2em] bg-[#2A1BD7] border-[#2A1BD7] text-white py-[10px] px-5 rounded-sm"
                                    href="/"
                                  >
                                    Learn More
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        {/* Portfolio section ends here */}

        {/* Services section starts here */}
        <section className="service my-0 py-[70px] z-[1] relative">
          <div className=" absolute top-0 left-0 w-full h-full overflow-hidden">
            <div
              className="service-img"
              style={{
                width: "100%",
                height: "140%",
                transform: "translateY(-230px)",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>

          <div className=" bg-[#1b0a47] opacity-50 h-full w-full top-0 left-0 absolute"></div>

          <div className="flex relative items-center flex-wrap min-h-[500px] max-w-[767px] md:max-w-[1024px] lg:max-w-[1140px] mx-auto">
            <div className=" w-full relative flex min-h-[1px]">
              <div className=" p-[10px] flex relative w-full flex-wrap content-start">
                <section className=" w-full relative">
                  <div className="flex relative flex-wrap max-w-[767px] md:max-w-[1024px] lg:max-w-[1140px] mx-auto">
                    <div className=" md:w-[25%] relative flex">
                      <div className=" flex relative w-full flex-wrap content-start"></div>
                    </div>

                    <div className=" w-full md:w-[50%] relative flex">
                      <div className=" p-[10px] flex flex-wrap content-start w-full">
                        <div
                          className=" text-center mb-5 w-full relative"
                          data-aos="fade-up"
                          data-aos-duration="2000"
                        >
                          <div className=" mb-[-15px]">
                            <h2 className=" text-white text-[4em] font-semibold leading-[1em] tracking-[-3px]">
                              My Services
                            </h2>
                          </div>
                        </div>

                        <div
                          className=" text-center w-full relative"
                          data-aos="fade-up"
                          data-aos-duration="2500"
                        >
                          <div className="">
                            <h3 className="text-white text-[2em] font-medium leading-[1.3em] tracking-[0px]">
                              I'm Available For Freelance Work
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-[25%] relative flex">
                      <div className="flex relative w-full flex-wrap content-start"></div>
                    </div>
                  </div>
                </section>

                <section className=" mt-8 w-full relative">
                  <div className="flex relative flex-wrap max-w-[767px] md:max-w-[1024px] lg:max-w-[1140px] mx-auto">
                    <div
                      className=" w-full md:w-1/2 lg:w-1/4"
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <div className=" p-8 flex relative flex-wrap content-start">
                        <div className=" w-full relative">
                          <div className="">
                            <div className=" text-left flex-row flex items-start">
                              <div className=" ml-0 mr-[15px] inline-flex grow-0 shrink-0 basis-auto">
                                <span className="elementor-icon elementor-animation-">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className=" w-9 h-9 fill-white"
                                  >
                                    <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                                  </svg>
                                </span>
                              </div>

                              <div className=" grow">
                                <div className=" text-[1em] font-medium leading-[1.3em] mb-[9px] text-white">
                                  <span>App Development </span>
                                </div>

                                <p className=" text-[#ffffffc7] text-xs font-normal leading-[1.5em]">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Ut elit tellus, luctus nec
                                  ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className=" w-full md:w-1/2 lg:w-1/4"
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <div className=" p-8 flex relative flex-wrap content-start">
                        <div className=" w-full relative">
                          <div className="">
                            <div className=" text-left flex-row flex items-start">
                              <div className=" ml-0 mr-[15px] inline-flex grow-0 shrink-0 basis-auto">
                                <span className="elementor-icon elementor-animation-">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-9 h-9 fill-white"
                                  >
                                    <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                                  </svg>
                                </span>
                              </div>

                              <div className=" grow">
                                <div className=" text-[1em] font-medium leading-[1.3em] mb-[9px] text-white">
                                  <span>Web APP </span>
                                </div>

                                <p className=" text-[#ffffffc7] text-xs font-normal leading-[1.5em]">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Ut elit tellus, luctus nec
                                  ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className=" w-full md:w-1/2 lg:w-1/4"
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <div className=" p-8 flex relative flex-wrap content-start">
                        <div className=" w-full relative">
                          <div className="">
                            <div className=" text-left flex-row flex items-start">
                              <div className=" ml-0 mr-[15px] inline-flex grow-0 shrink-0 basis-auto">
                                <span className="elementor-icon elementor-animation-">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className=" w-9 h-9 fill-white"
                                  >
                                    <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                                  </svg>
                                </span>
                              </div>

                              <div className=" grow">
                                <div className=" text-[1em] font-medium leading-[1.3em] mb-[9px] text-white">
                                  <span>WordPress Development </span>
                                </div>

                                <p className=" text-[#ffffffc7] text-xs font-normal leading-[1.5em]">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Ut elit tellus, luctus nec
                                  ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className=" w-full md:w-1/2 lg:w-1/4"
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <div className=" p-8 flex relative flex-wrap content-start">
                        <div className=" w-full relative">
                          <div className="">
                            <div className=" text-left flex-row flex items-start">
                              <div className=" ml-0 mr-[15px] inline-flex grow-0 shrink-0 basis-auto">
                                <span className="elementor-icon elementor-animation-">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className=" w-9 h-9 fill-white"
                                  >
                                    <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                                  </svg>
                                </span>
                              </div>

                              <div className=" grow">
                                <div className=" text-[1em] font-medium leading-[1.3em] mb-[9px] text-white">
                                  <span>Front-end Development </span>
                                </div>

                                <p className=" text-[#ffffffc7] text-xs font-normal leading-[1.5em]">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Ut elit tellus, luctus nec
                                  ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <div
                  className=" w-full relative text-center"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className=" mt-[50px]">
                    <div className="elementor-button-wrapper">
                      <a
                        className=" text-white bg-[#2b1ec2] text-base py-4 px-8 rounded inline-block leading-[1] hover:scale-90 hover:transition-all hover:duration-500 hover:ease-in-out"
                        href="/"
                      >
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">
                            Hire Me!
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services section ends here */}
      </div>
    </div>
  );
}

export default Main;
