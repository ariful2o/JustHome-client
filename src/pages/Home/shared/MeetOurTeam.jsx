import teamMember1 from '../../../assets/Team/Link → 12-330x400.jpg.png'
import teamMember2 from '../../../assets/Team/Link → 6-330x400.jpg.png'
import teamMember3 from '../../../assets/Team/Link → 8-330x400.jpg.png'
import teamMember4 from '../../../assets/Team/Link → team3.jpg.png'

export default function MeetOurTeam() {
  return (
    <div className="w-11/12 mx-auto mt-40">
        <h2 className="text-4xl font-bold text-center font-sotify">Meet Our Team of Experts</h2>
        <p className="text-center">These details should help you envision the currect desications and features of each website idea,</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="my-16">
                <img className="rounded-xl" src={teamMember1} alt="" />
                <h4 className="text-xl font-semibold mt-4">John Powell</h4>
                <p className="text-sm font-sotify">Service Support</p>
            </div>
            <div className="my-16">
                <img className="rounded-xl" src={teamMember2} alt="" />
                <h4 className="text-xl font-semibold mt-4">Tom wilson</h4>
                <p className="text-sm font-sotify">Designer</p>
            </div>
            <div className="my-16">
                <img className="rounded-xl" src={teamMember3} alt="" />
                <h4 className="text-xl font-semibold mt-4">Thomas Powell</h4>
                <p className="text-sm font-sotify">Marketing</p>
            </div>
            <div className="my-16">
                <img className="rounded-xl" src={teamMember4} alt="" />
                <h4 className="text-xl font-semibold mt-4">Samuel Palmer</h4>
                <p className="text-sm font-sotify">Marketing</p>
            </div>
        </div>
      
    </div>
  )
}
