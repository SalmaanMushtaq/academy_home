// import styles from "./Courses.module.css";

// function Courses() {
//   return (
//     <div className={`container-fluid ${styles.courseContainer} px-5 bg-white`}>
//       <div className={` ${styles.row} row`}>
//         <div className="col-md-6">
//           <div className={`${styles.content} position-relative`}>
//             <h1 className="fw-bold">Gaining </h1>
//             <h1 className="fw-bold mb-0">Knowledge is an </h1>
//             <p className="fw-bold fs-1 mt-0">Active Part of Faith</p>
//             <p>
//               Our programs are all personally developed in a way students can
//               getaccess to our classical Islamic texts
//             </p>
//             <button className={`btn btn-success ${styles.courseBtn}`}>
//               Courses
//             </button>
//           </div>
//           <img
//             src="/images/Child.png"
//             alt="image3"
//             className={`${styles.image3}`}
//           />
//         </div>
//         <div className="col-md-6">
//           <div className={`${styles.imageContainer}`}>
//             <img
//               src="/images/Man.png"
//               alt="image here"
//               className={`${styles.man} img-fluid position-relative z-1`}
//             />
//             <img
//               src="/images/midle-right.png"
//               alt="middle"
//               className={`img-fluid ${styles.imageCenter}`}
//             />
//             <img
//               src="/images/quran2.png"
//               alt="middle"
//               className={`img-fluid ${styles.imageQuran} h-25`}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Top left image */}
//       <img
//         src="/images/Lamps.png"
//         alt="image1"
//         className={`${styles.image1}`}
//       />
//       {/* Top right image */}
//       <img
//         src="/images/Lamp2.png"
//         alt="image2"
//         className={`${styles.image2}`}
//       />
//       {/* Middle image */}
//       <img src="/images/Pen.png" alt="image4" className={`${styles.image4}`} />
//     </div>
//   );
// }

// export default Courses;

import styles from "./Courses.module.css";

function Courses() {
  return (
    <div
      className={`container-fluid ${styles.courseContainer} px-md-5 bg-white`}
    >
      <div className={`row ${styles.row}`}>
        <div className="col-md-6 position-relative">
          <div className={`${styles.content} position-relative`}>
            <h1 className="fw-bold">Gaining</h1>
            <h1 className="fw-bold mb-0">Knowledge is an</h1>
            <p className="fw-bold fs-1 mt-0">Active Part of Faith</p>
            <p>
              Our programs provide access to classical Islamic texts, fostering
              deep understanding and engagement.
            </p>
            <button className={`btn btn-success ${styles.courseBtn}`}>
              Courses
            </button>
          </div>
          <img
            src="/images/Child.png"
            alt="Child"
            className={`${styles.image} ${styles.childImage}`}
          />
        </div>
        <div className="col-md-6 position-relative">
          <div className={`${styles.imageContainer}`}>
            <img
              src="/images/Man.png"
              alt="Man"
              className={`img-fluid ${styles.man} position-absolute z-1`}
            />
            <img
              src="/images/midle-right.png"
              alt="Middle"
              className={`img-fluid ${styles.imageCenter}`}
            />
            <img
              src="/images/quran2.png"
              alt="Quran"
              className={`img-fluid ${styles.imageQuran}`}
            />
          </div>
        </div>
      </div>

      <img
        src="/images/Lamps.png"
        alt="Lamps"
        className={`${styles.image} ${styles.topLeftImage}`}
      />
      <img
        src="/images/Lamp2.png"
        alt="Lamp2"
        className={`${styles.image} ${styles.topRightImage}`}
      />
      <img
        src="/images/Pen.png"
        alt="Pen"
        className={`${styles.image} ${styles.middleImage}`}
      />
    </div>
  );
}

export default Courses;
