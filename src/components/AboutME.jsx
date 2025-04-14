import React from "react";

function AboutME() {
  const profileImage = "images/1700657007195 (1).jpg";
  const haerinImage = "/images/Haerin.jpg";
  const chaEunWooImage = "/images/A_Good_Day_to_Be_a_Dog-a00.jpg";
  const backgroundImage = "/images/24600855_sl_031420_28950_10.jpg";

  return (
    <div
      style={{
        ...styles.container,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <h2 style={styles.heading}>LEARN MORE ABOUT ME</h2>
      <div style={styles.content}>
        <img src={profileImage} alt="Paul Yannie Manglibo" style={styles.profilePicture} />
        <div style={styles.infoContainer}>

          <div style={styles.mainInfo}>
            <h3 style={styles.name}>Paul Yannie Manglibo</h3>
            <p style={styles.introduction}>
              Hello Everyone! I am Paul Yannie Manglibo, 20 years old, from Bangued, Abra. I am
              currently taking a Bachelor's of Science in Information Technology with a major in Web
              Technology at the University of the Cordilleras. I am the type of student who works smart,
              not hard. My motto in life is: let's do things that makes us happy in a way that doesn't
              hurt anyone.
            </p>
            <div style={styles.details}>
              <div style={styles.detailItem}>
                <strong style={styles.strong}>Birthday:</strong> January 13 2005
              </div>
              <div style={styles.detailItem}>
                <strong style={styles.strong}>Age:</strong> 20
              </div>
              <div style={styles.detailItem}>
                <strong style={styles.strong}>Phone:</strong> +639350229305
              </div>
              <div style={styles.detailItem}>
                <strong style={styles.strong}>Gmail:</strong> manglibopaul@gmail.com
              </div>
              <div style={styles.detailItem}>
                <strong style={styles.strong}>City:</strong> Bangued, Abra
              </div>
              <div style={styles.detailItem}>
                <strong style={styles.strong}>Website:</strong> yanniemanglibo.github.io/pvm/
              </div>
            </div>
          </div>

          <div style={styles.additionalInfo}>
            <div style={styles.skillsContainer}>
              <h4 style={styles.skillsHeading}>SKILLS</h4>
              <div style={styles.skillsGrid}>
                <div style={styles.skillItem}>
                  <span style={styles.skillLabel}>TENNIS</span>
                  <div style={styles.progressBar}>
                    <div style={{ ...styles.progressBarFill, width: '80%' }}>80%</div>
                  </div>
                </div>
                <div style={styles.skillItem}>
                  <span style={styles.skillLabel}>PROBLEM SOLVING</span>
                  <div style={styles.progressBar}>
                    <div style={{ ...styles.progressBarFill, width: '50%' }}>50%</div>
                  </div>
                </div>
                <div style={styles.skillItem}>
                  <span style={styles.skillLabel}>GAMING</span>
                  <div style={styles.progressBar}>
                    <div style={{ ...styles.progressBarFill, width: '70%' }}>70%</div>
                  </div>
                </div>
                <div style={styles.skillItem}>
                  <span style={styles.skillLabel}>PROGRAMMING</span>
                  <div style={styles.progressBar}>
                    <div style={{ ...styles.progressBarFill, width: '20%' }}>20%</div>
                  </div>
                </div>
                <div style={styles.skillItem}>
                  <span style={styles.skillLabel}>FLEXIBILITY</span>
                  <div style={styles.progressBar}>
                    <div style={{ ...styles.progressBarFill, width: '60%' }}>60%</div>
                  </div>
                </div>
                <div style={styles.skillItem}>
                  <span style={styles.skillLabel}>MONEY SAVING</span>
                  <div style={styles.progressBar}>
                    <div style={{ ...styles.progressBarFill, width: '30%' }}>30%</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={styles.commentsContainer}>
              <h4 style={styles.commentsHeading}>COMMENTS</h4>
              <div style={styles.commentsRow}>
                <div style={styles.commentCard}>
                  <img src={haerinImage} alt="Haerin" style={styles.commentProfile} />
                  <div style={styles.commentText}>
                    <p style={styles.comment}>"Very Handsome"</p>
                    <small style={styles.commentAuthor}>Haerin</small>
                    <small style={styles.commentAffiliation}>ADORE</small>
                  </div>
                </div>
                <div style={styles.commentCard}>
                  <img src={chaEunWooImage} alt="Cha Eun Woo" style={styles.commentProfile} />
                  <div style={styles.commentText}>
                    <p style={styles.comment}>"We look-alike"</p>
                    <small style={styles.commentAuthor}>Cha Eun Woo</small>
                    <small style={styles.commentAffiliation}>ASTRO</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: 'black',
    color: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    fontFamily: 'sans-serif',
  },
  heading: {
    color: '#fdd835',
    marginBottom: '25px',
    fontSize: '2em',
    fontWeight: 'bold',
  },
  content: {
    display: 'flex',
    gap: '30px',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  profilePicture: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    borderRadius: '10px',
    objectFit: 'cover',
    border: '2px solid #fdd835',
    marginBottom: '20px',
  },
  infoContainer: {
    backgroundColor: 'rgba(17, 17, 17, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    flex: 1,
    minWidth: '300px',
  },
  mainInfo: {
    flex: 1,
  },
  additionalInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '100%',
  },
  info: {
    flex: 1,
    minWidth: '300px',
  },
  name: {
    color: '#fdd835',
    fontSize: '1.8em',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  introduction: {
    lineHeight: '1.6',
    marginBottom: '20px',
    color: '#eee',
  },
  details: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gap: '10px 20px',
    marginBottom: '20px',
    fontSize: '0.95em',
  },
  detailItem: {
    color: '#ddd',
  },
  strong: {
    fontWeight: 'bold',
    color: '#fdd835',
  },
  skillsContainer: {
    marginBottom: '25px',
  },
  skillsHeading: {
    color: '#fdd835',
    fontSize: '1.2em',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '10px 20px',
  },
  skillItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  skillLabel: {
    color: '#ddd',
    fontWeight: 'bold',
    fontSize: '0.9em',
    marginBottom: '5px',
  },
  progressBar: {
    backgroundColor: '#333',
    borderRadius: '10px',
    height: '10px',
    overflow: 'hidden',
    width: '100%',
  },
  progressBarFill: {
    backgroundColor: '#fdd835',
    height: '100%',
    borderRadius: '10px',
    color: '#1e1e1e',
    textAlign: 'right',
    paddingRight: '8px',
    fontSize: '0.6em',
    boxSizing: 'border-box',
  },
  commentsContainer: {
    marginTop: '20px',
  },
  commentsHeading: {
    color: '#fdd835',
    fontSize: '1.2em',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  commentsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  commentCard: {
    backgroundColor: '#2c2c2c',
    borderRadius: '8px',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    maxWidth: '400px',
    boxSizing: 'border-box',
  },
  commentProfile: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
  },
  commentText: {
    color: '#eee',
    fontSize: '0.9em',
  },
  comment: {
    marginBottom: '5px',
    fontStyle: 'italic',
  },
  commentAuthor: {
    fontWeight: 'bold',
    color: '#fdd835',
    display: 'block',
  },
  commentAffiliation: {
    color: '#999',
    fontSize: '0.8em',
    display: 'block',
  },
};

export default AboutME;
