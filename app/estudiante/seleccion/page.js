import Link from "next/link"
import SearchBar from "@/app/components/SearchBar"
import SaveButton from "@/app/components/SaveButton"
import CancelButton from "@/app/components/CancelButton"
import BlueBar from "@/app/components/BlueDivisionBar"
import TablaInfinita from "@/app/components/tableComponent/firstComponent"
import SecondTable from "@/app/components/tableComponent/secondComponent"

const data = [
  {
    header1: 'data',
    header2: 'data',
    header3: 'data',
    data: [
      { headerA: 'data', headerB: 'data', headerC: 'data' },
      { headerA: 'data', headerB: 'data', headerC: 'data' },
    ],
  },
  {
    header1: 'data',
    header2: 'data',
    header3: 'data',
    data: [
      { headerA: 'data', headerB: 'data', headerC: 'data' },
      { headerA: 'data', headerB: 'data', headerC: 'data' },
    ],
  },
];


export default function Home() {
  return (
    <div className="p-24 space-y-4 pt-40 flex flex-col justify-start h-screen w-screen">
      <div className=" relative xl:text-7xl lg:text-7xl md:text-5xl sm:text-4xl font-bold">Seleccion de asignaturas</div>
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col md:flex-row relative justify-between items-center p-2 w-full h-1/6 ">
          <SearchBar style={'flex items-center bg-white p-3 px-8 rounded-xl'} />
          <div className="flex relative items-center h-full">
            <SaveButton />
            <CancelButton />
          </div>
        </div>
        <BlueBar />
        <div className="flex flex-col space-y-4 w-full h-full">
          <div className="relative h-full w-full rounded-xl p-5 overflow-scroll" style={{
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}>
            <TablaInfinita data={data} style1={'bg-[#4B63FD]'} />
          </div>
          <div className="relative h-full w-full rounded-xl p-5 overflow-scroll" style={{
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}>
            <TablaInfinita data={data} style1={'bg-[#4B63FD]'} />
          </div>
        </div>
      </div>
    </div>
  )
}