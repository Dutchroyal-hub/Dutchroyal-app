import testImg1 from '../../Images/testImg1.webp'
// import testImg2 from '../../Images/testImg2.webp'
// import testImg3 from '../../Images/testImg3.jpg'
// import testImg4 from '../../Images/testImg4.jpg'

export const data = [
    {
        id: 1,
        image: `${testImg1}`,
        title: "The best job portal",
        testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellat veritatis suscipit eum laboriosam ipsam dignissimos cupiditate voluptatibus! Fugit nesciunt facilis, ullam quam soluta dolorum sint incidunt eius molestiae libero?",
        name: "SeunDavid Developer, DIRI",
    },
    // {
    //     id: 2,
    //     image: `${testImg2}`,
    //     title: "Amazing Job Portal",
    //     testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellat veritatis suscipit eum laboriosam ipsam dignissimos cupiditate voluptatibus! Fugit nesciunt facilis, ullam quam soluta dolorum sint incidunt eius molestiae libero?",
    //     name: "Sandra Rollins HR, Amazon",
    // },
    // {
    //     id: 3,
    //     image: `${testImg3}`,
    //     title: "Lovely job portal",
    //     testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellat veritatis suscipit eum laboriosam ipsam dignissimos cupiditate voluptatibus! Fugit nesciunt facilis, ullam quam soluta dolorum sint incidunt eius molestiae libero?",
    //     name: "Jake Suliman Finance, Google",
    // },
    // {
    //     id: 4,
    //     image: `${testImg4}`,
    //     title: "Grateful For This job portal",
    //     testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellat veritatis suscipit eum laboriosam ipsam dignissimos cupiditate voluptatibus! Fugit nesciunt facilis, ullam quam soluta dolorum sint incidunt eius molestiae libero?",
    //     name: "Tyron James Developer, Microsoft",
    // },
]


// const [people] = useState(data);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const lastIndex = people.length -1;

//     if(index < 0){
//       setIndex(lastIndex)
//     }
//     if(index > lastIndex){
//       setIndex(0)
//     }
//   }, [index, people]);

//   useEffect(() => {
//     let slider = setInterval(() => {
//       setIndex(index + 1)
//     }, 5000);
//     return () => {
//       clearInterval(slider)
//     }
//   }, [index])


//   {people.map((item, indexPeople) => {
//     const {id, image, title, testimony, name} = item;
//     let position = "nextSlide"
//     if(indexPeople === index){
//       position = "activeSlide"
//     }
//     if(indexPeople === index - 1 || (index === 0 && indexPeople === people.length - 1)){
//       position = "lastSlide"
//     }
//     return(
//       <div className={position} key={id}>
//         <div className='testDeets'>
//             <h4 className='testHeader'>{title}</h4>
//             <p className='mt-4 testTxt'>{testimony}</p>
//             <span className='d-flex justify-content-betwewen gap-2 mt-3'>
//                 <FaQuoteLeft size={20} color='#FFD700' className='mt-4' />
//                 <h5 className='testName mt-4'>{name}</h5>
//             </span>
//         </div>
//         <div className='testImgBox d-flex justify-content-center'>
//             <img src={image} alt={name} className='testBox'/>
//         </div>
//       </div>
//     )
//   })}
