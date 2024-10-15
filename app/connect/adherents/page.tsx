"use client";

import { SetStateAction, useState } from "react";
import Paginator from "../../../@/components/ui/paginator";

const adherentsData = Array(44).fill({
  firstName: "John",
  lastName: "Dupont",
  phone: "+33 6 38 10 99 22",
  email: "jean.dupont@mail.com",
  rfid: "RF12345678",
  gender: "F",
});

const ConnectMembers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const totalPages = Math.ceil(adherentsData.length / pageSize);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedData = adherentsData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Rechercher un.e adhérent.e"
          className="border p-2 rounded-lg w-1/3"
        />
        <div className="text-lg font-semibold">Année 2024</div>
      </div>

      <h2 className="text-xl font-semibold mb-4">
        {adherentsData.length} adhérent.es dans la liste
      </h2>

      <table className="min-w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">Prénom</th>
            <th className="p-3 text-left">Nom</th>
            <th className="p-3 text-left">Téléphone</th>
            <th className="p-3 text-left">mail</th>
            <th className="p-3 text-left">RFID</th>
            <th className="p-3 text-left">Genre</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((adherent, index) => (
            <tr
              key={index}
              className={`border-b ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <td className="p-3">{adherent.firstName}</td>
              <td className="p-3">{adherent.lastName}</td>
              <td className="p-3">{adherent.phone}</td>
              <td className="p-3">{adherent.email}</td>
              <td className="p-3">{adherent.rfid}</td>
              <td className="p-3">{adherent.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(pageNumber: SetStateAction<number>) =>
          setCurrentPage(pageNumber)
        }
      />
    </div>
  );
};

export default ConnectMembers;
