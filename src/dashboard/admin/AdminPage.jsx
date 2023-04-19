import React from "react";

function AdminPage() {
  return (
    <div className="h-screen">
      <div class=" overflow-x-auto">
        <table class="w-[90%] lg:w-[1000px] mx-auto text-sm uppercase">
          <thead className="bg-blue-700">
            <tr>
              <th className="p-5 text-center font-semibold text-gray-100">
                Index Number
              </th>
              <th className="p-5 text-center font-semibold text-gray-100">
                Name
              </th>
              <th className="p-5 text-center font-semibold text-gray-100">
                Class
              </th>
              <th className="p-5 text-center font-semibold text-gray-100">
                Course
              </th>
              <th className="p-5 text-center font-semibold text-gray-100">
                Score
              </th>
              <th className="p-5 text-center font-semibold text-gray-100">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-5 text-center font-semibold ">0010122123</td>
              <td className="p-5 text-center text-gray-500">desmond kudjuh</td>
              <td className="p-5 text-center text-gray-500">HND ICT 300</td>
              <td className="p-5 text-center text-gray-500">JavaScript</td>
              <td className="p-5 text-center text-gray-500">80</td>
              <td className="p-5 text-center text-blue-700">
                Edit/<span className="text-red-600">Delete</span>
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="p-5 text-center font-semibold ">0010122123</td>
              <td className="p-5 text-center text-gray-500">desmond kudjuh</td>
              <td className="p-5 text-center text-gray-500">HND ICT 300</td>
              <td className="p-5 text-center text-gray-500">JavaScript</td>
              <td className="p-5 text-center text-gray-500">80</td>
              <td className="p-5 text-center text-blue-700">
                Edit/<span className="text-red-600">Delete</span>
              </td>
            </tr>
            <tr>
              <td className="p-5 text-center font-semibold ">0010122123</td>
              <td className="p-5 text-center text-gray-500">desmond kudjuh</td>
              <td className="p-5 text-center text-gray-500">HND ICT 300</td>
              <td className="p-5 text-center text-gray-500">JavaScript</td>
              <td className="p-5 text-center text-gray-500">80</td>
              <td className="p-5 text-center text-blue-700">
                Edit/<span className="text-red-600">Delete</span>
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="p-5 text-center font-semibold ">0010122123</td>
              <td className="p-5 text-center text-gray-500">desmond kudjuh</td>
              <td className="p-5 text-center text-gray-500">HND ICT 300</td>
              <td className="p-5 text-center text-gray-500">JavaScript</td>
              <td className="p-5 text-center text-gray-500">80</td>
              <td className="p-5 text-center text-blue-700">
                Edit/<span className="text-red-600">Delete</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPage;
