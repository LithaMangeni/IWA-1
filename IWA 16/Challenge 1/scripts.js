// scripts.js

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment

  const formatTime = (minutes) =>{
    const hours = Math.floor(minutes/60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}`
  };
//   The createAthleteSection function takes athlete data as a parameter and destructures the data into variables: id, firstName, surname, and races.
  const createAthleteSection = (athleteData) => {
    const {firstName, surname, id, races} = athleteData;
    const section = document.querySelector(`[data-athlete = "${id}"]`)

   const latestRace = races[races.length - 1];
   const raceDate = new Date(latestRace.date);
   const raceTime =latestRace.time.reduce((acc, val) => acc + val, 0);
  
    const ul = document.createElement('ul');

    const lifullName = document.createElement('li');
    lifullName.innerHTML = `Athlete: ${firstName} ${surname}`;
    ul.appendChild(lifullName);
  
    const litotalRaces = document.createElement('li');
    litotalRaces.innerHTML = `TotalRaces: ${races.length}`;
    ul.appendChild(litotalRaces);  
  
    const lieventDate = document.createElement('li');
    lieventDate.innerHTML = `Event Date(Latest): ${raceDate.getDate()} ${MONTHS[raceDate.getMonth()]} ${raceDate.getFullYear()}`;
    ul.appendChild(lieventDate);
  
    const liTotalTime = document.createElement('li');
    liTotalTime.innerHTML = `Total Time (Latest): ${formatTime(raceTime)}`;
    ul.appendChild(liTotalTime);

    section.appendChild(ul);
  
  }
  
  for (const athleteId in data.response.data) {
    createAthleteSection(data.response.data[athleteId]);
  }
  