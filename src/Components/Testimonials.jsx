import React from 'react'
import { IconBrandLinkedin } from '@tabler/icons';

const Testimonials = () => {
 
    const people = [
        {
          name: "Front End Developer",
          avatar: "https://fancytailwind.com/static/avatar-1-7bc2ffc3e63774cda6a41a4869604ebb.png",
          testimony: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quidem doloremque itaque, asperiores neque porro excepturi possimus. Est placeat ipsam labore. Aliquam necessitatibus quia tenetur!",
          twitterPseudo: "@claramegan"
        },
        {
          name: "UI Designer",
          avatar: "https://fancytailwind.com/static/avatar-2-a0aa9c1384e34144e1a683fed8612642.png",
          testimony: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quidem doloremque itaque, asperiores neque porro excepturi possimus. Est placeat ipsam labore. Aliquam necessitatibus quia tenetur!",
          twitterPseudo: "@leoturner"
        },
        {
          name: "Data Analyst",
          avatar: "https://fancytailwind.com/static/avatar-3-005377e606b29854c3ff1c525ddd8ec4.png",
          testimony: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quidem doloremque itaque, asperiores neque porro excepturi possimus. Est placeat ipsam labore. Aliquam necessitatibus quia tenetur!",
          twitterPseudo: "@keithchambers"
        },
    
      ]

      return (
        <div className="relative mx-auto py-5 px-4 w-full max-w-7xl text-black">
          <div className="flex flex-col items-center">
    
          
            <div className="mb-8 px-4">
              <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold">Hall Of Fame</h2>
            </div>
    
           
            <div className="mx-auto w-full max-w-sm sm:max-w-3xl lg:max-w-6xl">
              <ul className="grid grid-cols-6 gap-5">
                {people.map(person => (
                  <li key={person.twitterPseudo} className="col-span-full sm:col-span-3 lg:col-span-2 py-6 px-4 flex flex-col rounded-xl shadow-lg bg-blue">
                  
                    <div className="flex items-center space-x-3">
                     
                      <span className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden">
                        <img src={person.avatar} alt="" className="object-cover" />
                      </span>
                      <div className="text-left">
                        
                        <h3 className="text-base font-semibold">{person.name}</h3>
                        
                        <p className="cursor-pointer text-sm text-gray-400"><IconBrandLinkedin color='black'/></p>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex text-sm">
                      
                      <p className="text-sm">
                        
                        {person.testimony}
                      </p>
                    </div>
                  </li>
                ))
                }
              </ul>
            </div>
    
            
    
          </div>
        </div>
      )

}

export default Testimonials
