import React from "react";
import moment from "moment";

function FooterCalender() {
  var yesterdayNumberBefore = moment().clone().subtract(2, "days").format("DD");
  var yesterdayBefore = moment().clone().subtract(2, "days").format("ddd");

  var yesterdayNumber = moment().clone().subtract(1, "days").format("DD");
  var yesterday = moment().clone().subtract(1, "days").format("ddd");

  var today = moment().format("ddd");
  var todayNumber = moment().format("DD");

  var tomorrowNumber = moment().clone().add(1, "days").format("DD");
  var tomorrow = moment().clone().add(1, "days").format("ddd");

  var tomorrowNumberAfter = moment().clone().add(2, "days").format("DD");
  var tomorrowAfter = moment().clone().add(2, "days").format("ddd");

  return (
    <div className="h-[150px] mt-2">
      <div className=" flex bg-secondary justify-start md:justify-center   mx-auto py-4 px-2  md:mx-12 mb-10">
        <div className="flex group hover:bg-red-800 hover:shadow-lg hover-dark-shadow rounded-full mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16">
          <div className="flex items-center px-4 py-4">
            <div className="text-center">
              <p className="text-primary group-hover:text-gray-100 text-sm transition-all  group-hover:font-semibold duration-300">
                {yesterdayBefore}
              </p>
              <p className="text-primary group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
                {yesterdayNumberBefore}
              </p>
            </div>
          </div>
        </div>

        <div className="flex group hover:bg-red-800 hover:shadow-lg hover-dark-shadow rounded-full mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16">
          <div className="flex items-center px-4 py-4">
            <div className="text-center">
              <p className="text-primary group-hover:text-gray-100 text-sm transition-all font-normal group-hover:font-semibold	duration-300">
                {yesterday}
              </p>
              <p className="text-primary group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
                {yesterdayNumber}
              </p>
            </div>
          </div>
        </div>

        <div className="flex group bg-red-800 shadow-lg dark-shadow rounded-full mx-1 cursor-pointer justify-center relative  w-16">
          <span className="flex h-2 w-2 absolute bottom-1.5 ">
            <span className="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-red-800 "></span>
            <span className="relative inline-flex rounded-full h- w-3 bg-purple-100"></span>
          </span>
          <div className="flex items-center px-4 my-2 py-4">
            <div className="text-center">
              <p className="text-gray-100 text-sm font-semibold"> {today} </p>
              <p className="text-gray-100  mt-3 font-bold"> {todayNumber} </p>
            </div>
          </div>
        </div>

        <div className="flex group hover:bg-red-800 hover:shadow-lg hover-dark-shadow rounded-full mx-1 transition-all	duration-300 cursor-pointer justify-center w-16">
          <div className="flex items-center px-4 py-4">
            <div className="text-center">
              <p className="text-primary group-hover:text-gray-100 text-sm transition-all  group-hover:font-semibold duration-300">
                {tomorrow}
              </p>
              <p className="text-primary group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
                {tomorrowNumber}
              </p>
            </div>
          </div>
        </div>

        <div className="flex group hover:bg-red-800 hover:shadow-lg hover-dark-shadow rounded-full mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16">
          <div className="flex items-center px-4 py-4">
            <div className="text-center">
              <p className="text-primary group-hover:text-gray-100 text-sm transition-all  group-hover:font-semibold duration-300">
                {tomorrowAfter}
              </p>
              <p className="text-primary group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
                {tomorrowNumberAfter}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterCalender;
