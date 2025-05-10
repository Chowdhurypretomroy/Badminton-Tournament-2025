// BadmintonScoreboard component
const BadmintonScoreboard = () => {
    // Team colors with animal themes
    const teamData = {
      'Team 1': { 
        color: '#D4AF37', // Gold
        animal: 'Lion',
        icon: '🦁'
      },
      'Team 2': { 
        color: '#FF7A00', // Orange
        animal: 'Tiger',
        icon: '🐯'
      },
      'Team 3': { 
        color: '#C86428', // Copper
        animal: 'Eagle',
        icon: '🦅'
      },
      'Team 4': { 
        color: '#FFB347', // Pastel Orange
        animal: 'Fox',
        icon: '🦊'
      },
      'Team 5': { 
        color: '#E6BE8A', // Gold Sand
        animal: 'Bear',
        icon: '🐻'
      },
      'Team 6': { 
        color: '#DAA520', // Golden Rod
        animal: 'Wolf',
        icon: '🐺'
      },
      'Team 7': { 
        color: '#B87333', // Copper
        animal: 'Elephant',
        icon: '🐘'
      },
      'Team 8': { 
        color: '#F28C28', // Tangerine
        animal: 'Leopard',
        icon: '🐆'
      },
      'Team 9': { 
        color: '#CD7F32', // Bronze
        animal: 'Falcon',
        icon: '🦅'
      },
      'Team 10': { 
        color: '#E5AA70', // Fawn
        animal: 'Deer',
        icon: '🦌'
      },
    };
    
    // Initial team data - Changed matchesDrawn to matchesLost
    const initialTeams = [
      { id: 1, name: 'Team 1', players: ['Bir Jahangir Shirazy', 'Joy Chakrobortty'], matchesPlayed: 0, matchesWon: 0, matchesLost: 0, points: 0, color: teamData['Team 1'].color, animal: teamData['Team 1'].animal, icon: teamData['Team 1'].icon },
      { id: 2, name: 'Team 2', players: ['S. M. Shamim', 'Tanvir Anik'], matchesPlayed: 0, matchesWon: 0, matchesLost: 0, points: 0, color: teamData['Team 2'].color, animal: teamData['Team 2'].animal, icon: teamData['Team 2'].icon },
      { id: 3, name: 'Team 3', players: ['Sheikh Nuruzzaman Rokib', 'Md. Salauddin'], matchesPlayed: 0, matchesWon: 0, matchesLost: 0, points: 0, color: teamData['Team 3'].color, animal: teamData['Team 3'].animal, icon: teamData['Team 3'].icon },
      { id: 4, name: 'Team 4', players: ['Saidur Rahman', 'Bakhtiar Lijon'], matchesPlayed: 0, matchesWon: 0, matchesLost: 0, points: 0, color: teamData['Team 4'].color, animal: teamData['Team 4'].animal, icon: teamData['Team 4'].icon },
      { id: 5, name: 'Team 5', players: ['KJ Biplob', 'Zahidul Tomas'], matchesPlayed: 0, matchesWon: 0, matchesLost: 0, points: 0, color: teamData['Team 5'].color, animal: teamData['Team 5'].animal, icon: teamData['Team 5'].icon },
      { id: 6, name: 'Team 6', players: ['Biplob Hossain', 'Pretom Roy Chowdhury'], matchesPlayed: 0, matchesWon: 0, matchesLost: 0, points: 0, color: teamData['Team 6'].color, animal: teamData['Team 6'].animal, icon: teamData['Team 6'].icon },
      { id: 7, name: 'Team 7', players: ['Asadulla Al Galib', 'Zahidul Islam Zihad'], matchesPlayed: 0, matchesWon: 0, matchesLost: 0, points: 0, color: teamData['Team 7'].color, animal: teamData['Team 7'].animal, icon: teamData['Team 7'].icon },
      { id: 8, name: 'Team 8', players: ['Rashedul Haque', 'Imran Ali'], matchesPlayed: 0, matchesWon: 0, matchesLost: 0, points: 0, color: teamData['Team 8'].color, animal: teamData['Team 8'].animal, icon: teamData['Team 8'].icon },
      { id: 9, name: 'Team 9', players: ['Ahsan Ullah Bappy', 'Md. Ismail Hossain'], matchesPlayed: 0, matchesWon: 0, matchesLost: 0, points: 0, color: teamData['Team 9'].color, animal: teamData['Team 9'].animal, icon: teamData['Team 9'].icon },
      { id: 10, name: 'Team 10', players: ['Abdulla Al Jubayer', 'Md. Sarwar'], matchesPlayed: 0, matchesWon: 0, matchesLost: 0, points: 0, color: teamData['Team 10'].color, animal: teamData['Team 10'].animal, icon: teamData['Team 10'].icon }
    ];
  
    // All scheduled matches from the tournament schedule
const scheduledMatches = [
    // Week 1
    { id: 1, teams: ['Team 3', 'Team 7'] },
    { id: 2, teams: ['Team 2', 'Team 4'] },
    { id: 3, teams: ['Team 3', 'Team 1'] },
    { id: 4, teams: ['Team 5', 'Team 8'] },
    { id: 5, teams: ['Team 6', 'Team 9'] },
    { id: 6, teams: ['Team 4', 'Team 7'] },
    { id: 7, teams: ['Team 6', 'Team 8'] },
    { id: 8, teams: ['Team 1', 'Team 7'] },
    { id: 9, teams: ['Team 5', 'Team 9'] },
    { id: 10, teams: ['Team 1', 'Team 6'] },
    { id: 11, teams: ['Team 2', 'Team 7'] },
    { id: 12, teams: ['Team 4', 'Team 8'] },
    { id: 13, teams: ['Team 1', 'Team 10'] },
    { id: 14, teams: ['Team 2', 'Team 10'] },
    { id: 15, teams: ['Team 5', 'Team 6'] },
    { id: 16, teams: ['Team 9', 'Team 10'] },
    { id: 17, teams: ['Team 1', 'Team 4'] },
    { id: 18, teams: ['Team 8', 'Team 10'] },
    { id: 19, teams: ['Team 4', 'Team 10'] },
    { id: 20, teams: ['Team 2', 'Team 9'] },
    { id: 21, teams: ['Team 3', 'Team 8'] },
    { id: 22, teams: ['Team 3', 'Team 5'] },
    { id: 23, teams: ['Team 3', 'Team 6'] },
    
    // Week 2
    { id: 24, teams: ['Team 2', 'Team 3'] },
    { id: 25, teams: ['Team 5', 'Team 7'] },
    { id: 26, teams: ['Team 3', 'Team 4'] },
    { id: 27, teams: ['Team 7', 'Team 9'] },
    { id: 28, teams: ['Team 3', 'Team 9'] },
    { id: 29, teams: ['Team 3', 'Team 10'] },
    { id: 30, teams: ['Team 2', 'Team 6'] },
    { id: 31, teams: ['Team 4', 'Team 9'] },
    { id: 32, teams: ['Team 7', 'Team 8'] },
    { id: 33, teams: ['Team 8', 'Team 9'] },
    { id: 34, teams: ['Team 7', 'Team 10'] },
    { id: 35, teams: ['Team 1', 'Team 9'] },
    { id: 36, teams: ['Team 4', 'Team 6'] },
    { id: 37, teams: ['Team 2', 'Team 5'] },
    { id: 38, teams: ['Team 6', 'Team 7'] },
    { id: 39, teams: ['Team 2', 'Team 8'] },
    { id: 40, teams: ['Team 1', 'Team 5'] },
    { id: 41, teams: ['Team 5', 'Team 10'] },
    { id: 42, teams: ['Team 6', 'Team 10'] },
    { id: 43, teams: ['Team 1', 'Team 2'] },
    { id: 44, teams: ['Team 4', 'Team 5'] },
    { id: 45, teams: ['Team 1', 'Team 8'] },
  ];
  
    // Initial semifinals and finals data
    const initialPlayoffs = {
      semifinals: [
        { id: 'SF1', team1: null, team2: null, scores: [null, null], winner: null },
        { id: 'SF2', team1: null, team2: null, scores: [null, null], winner: null }
      ],
      final: { id: 'F', team1: null, team2: null, scores: [null, null], winner: null }
    };
  
    // State hooks with localStorage persistence
    const [teams, setTeams] = React.useState(() => {
      const savedTeams = localStorage.getItem('badmintonTournamentTeams');
      return savedTeams ? JSON.parse(savedTeams) : initialTeams;
    });
    
    const [playoffs, setPlayoffs] = React.useState(() => {
      const savedPlayoffs = localStorage.getItem('badmintonTournamentPlayoffs');
      return savedPlayoffs ? JSON.parse(savedPlayoffs) : initialPlayoffs;
    });
  
    const [playedMatches, setPlayedMatches] = React.useState(() => {
      const savedMatches = localStorage.getItem('badmintonTournamentMatches');
      return savedMatches ? JSON.parse(savedMatches) : [];
    });
  
    const [activeTab, setActiveTab] = React.useState('standings');
    const [showAddDialog, setShowAddDialog] = React.useState(false);
    const [showPlayoffsDialog, setShowPlayoffsDialog] = React.useState(false);
    const [selectedMatch, setSelectedMatch] = React.useState({ team1: '', team2: '', winner: '', resultType: 'win' });
    const [playoffMatch, setPlayoffMatch] = React.useState({ type: '', matchId: '', team1Score: '', team2Score: '' });
    
    // Save data to localStorage
    React.useEffect(() => {
      localStorage.setItem('badmintonTournamentTeams', JSON.stringify(teams));
    }, [teams]);
  
    React.useEffect(() => {
      localStorage.setItem('badmintonTournamentPlayoffs', JSON.stringify(playoffs));
    }, [playoffs]);
  
    React.useEffect(() => {
      localStorage.setItem('badmintonTournamentMatches', JSON.stringify(playedMatches));
    }, [playedMatches]);
  
    // Reset all tournament data
    const resetTournament = () => {
      if (window.confirm('Are you sure you want to reset the entire tournament data? This will clear all match results and points.')) {
        localStorage.removeItem('badmintonTournamentTeams');
        localStorage.removeItem('badmintonTournamentMatches');
        localStorage.removeItem('badmintonTournamentPlayoffs');
        setTeams(initialTeams);
        setPlayedMatches([]);
        setPlayoffs(initialPlayoffs);
      }
    };
  
    // Filter for unplayed scheduled matches
    const getUnplayedMatches = () => {
      return scheduledMatches.filter(match => {
        return !playedMatches.some(playedMatch => 
          playedMatch.matchId === match.id
        );
      });
    };
  
    // Function to record a match result - Updated to handle wins/losses instead of draws
    const recordMatchResult = () => {
      if (!selectedMatch.team1 || !selectedMatch.team2) {
        alert('Please select a match');
        return;
      }
      
      if (selectedMatch.resultType === 'win' && !selectedMatch.winner) {
        alert('Please select a winner');
        return;
      }
  
      // Find the match ID
      const matchInfo = scheduledMatches.find(match => 
        match.teams[0] === selectedMatch.team1 && match.teams[1] === selectedMatch.team2
      );
      
      if (!matchInfo) {
        alert('Match not found in schedule');
        return;
      }
  
      // Add to played matches
      const newPlayedMatch = {
        matchId: matchInfo.id,
        team1: selectedMatch.team1,
        team2: selectedMatch.team2,
        resultType: selectedMatch.resultType,
        winner: selectedMatch.resultType === 'win' ? selectedMatch.winner : null,
        date: new Date().toISOString()
      };
      
      setPlayedMatches(prev => [...prev, newPlayedMatch]);
  
      // Update team statistics
      setTeams(prevTeams => {
        return prevTeams.map(team => {
          const isTeam1 = team.name === selectedMatch.team1;
          const isTeam2 = team.name === selectedMatch.team2;
          const isWinner = selectedMatch.resultType === 'win' && team.name === selectedMatch.winner;
          const isLoser = selectedMatch.resultType === 'win' && (isTeam1 || isTeam2) && team.name !== selectedMatch.winner;
          const isNoResult = selectedMatch.resultType === 'no-result' && (isTeam1 || isTeam2);
          
          if (isTeam1 || isTeam2) {
            return {
              ...team,
              matchesPlayed: isNoResult ? team.matchesPlayed : team.matchesPlayed + 1,
              matchesWon: isWinner ? team.matchesWon + 1 : team.matchesWon,
              matchesLost: isLoser ? team.matchesLost + 1 : team.matchesLost,
              points: isWinner ? team.points + 2 : team.points // Only winners get points
            };
          }
          return team;
        });
      });
  
      setShowAddDialog(false);
      setSelectedMatch({ team1: '', team2: '', winner: '', resultType: 'win' });
    };
  
    // Function to generate semifinals based on top 4 teams
    const generateSemifinals = () => {
      // Sort teams by points (descending)
      const topTeams = [...teams].sort((a, b) => b.points - a.points).slice(0, 4);
      
      if (topTeams.length < 4) {
        alert('You need at least 4 teams with points to generate semifinals');
        return;
      }
  
      // Create semifinals: 1st vs 4th, 2nd vs 3rd
      const newPlayoffs = {
        ...playoffs,
        semifinals: [
          { 
            id: 'SF1', 
            team1: topTeams[0].name, 
            team2: topTeams[3].name, 
            scores: [null, null], 
            winner: null 
          },
          { 
            id: 'SF2', 
            team1: topTeams[1].name, 
            team2: topTeams[2].name, 
            scores: [null, null], 
            winner: null 
          }
        ]
      };
      
      setPlayoffs(newPlayoffs);
    };
  
    // Function to handle playoff match results
    const recordPlayoffResult = () => {
      const { type, matchId, team1Score, team2Score } = playoffMatch;
      
      if (!type || !matchId || team1Score === '' || team2Score === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // Convert scores to numbers
      const score1 = parseInt(team1Score, 10);
      const score2 = parseInt(team2Score, 10);
  
      if (isNaN(score1) || isNaN(score2)) {
        alert('Scores must be numbers');
        return;
      }
  
      const newPlayoffs = { ...playoffs };
      
      if (type === 'semifinal') {
        // Find the semifinal match
        const semifinalIndex = newPlayoffs.semifinals.findIndex(m => m.id === matchId);
        if (semifinalIndex === -1) return;
        
        // Update scores
        newPlayoffs.semifinals[semifinalIndex].scores = [score1, score2];
        
        // Determine winner
        const winner = score1 > score2 
          ? newPlayoffs.semifinals[semifinalIndex].team1 
          : newPlayoffs.semifinals[semifinalIndex].team2;
        
        newPlayoffs.semifinals[semifinalIndex].winner = winner;
        
        // Update the final if both semifinals have winners
        const otherSemiFinalIndex = semifinalIndex === 0 ? 1 : 0;
        if (newPlayoffs.semifinals[otherSemiFinalIndex].winner) {
          newPlayoffs.final.team1 = newPlayoffs.semifinals[0].winner;
          newPlayoffs.final.team2 = newPlayoffs.semifinals[1].winner;
        }
      } else if (type === 'final') {
        // Update final scores
        newPlayoffs.final.scores = [score1, score2];
        
        // Determine champion
        newPlayoffs.final.winner = score1 > score2 
          ? newPlayoffs.final.team1 
          : newPlayoffs.final.team2;
      }
      
      setPlayoffs(newPlayoffs);
      setShowPlayoffsDialog(false);
      setPlayoffMatch({ type: '', matchId: '', team1Score: '', team2Score: '' });
    };
  
    // Sort teams by points (descending)
    const sortedTeams = [...teams].sort((a, b) => {
      // First sort by points
      if (b.points !== a.points) return b.points - a.points;
      // If points are equal, sort by matches won
      if (b.matchesWon !== a.matchesWon) return b.matchesWon - a.matchesWon;
      // If wins are equal, sort by matches lost (fewer losses is better)
      if (a.matchesLost !== b.matchesLost) return a.matchesLost - b.matchesLost;
      // If all else equal, sort by team name
      return a.name.localeCompare(b.name);
    });
  
    // Get team details by name
    const getTeamDetails = (teamName) => {
      return teams.find(team => team.name === teamName) || {};
    };
  
    // Main render function
    return (
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#1A1A1A',
        color: 'white',
        borderRadius: '10px',
        border: '1px solid #D4AF37',
        padding: '15px'
      }}>
        {/* Header */}
        <h1 style={{
          textAlign: 'center',
          background: 'linear-gradient(to right, #FF7A00, #D4AF37, #FF7A00)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: '10px 0',
          fontSize: '28px',
          fontWeight: 'bold'
        }}>
          Okayama University Badminton Tournament 2025
        </h1>
        
        {/* Navigation Tabs */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid #444',
          marginBottom: '15px'
        }}>
          <button onClick={() => setActiveTab('standings')} style={{
            padding: '8px 16px',
            backgroundColor: 'transparent',
            color: activeTab === 'standings' ? '#D4AF37' : '#AAA',
            border: 'none',
            borderBottom: activeTab === 'standings' ? '2px solid #D4AF37' : 'none',
            cursor: 'pointer',
            fontWeight: activeTab === 'standings' ? 'bold' : 'normal',
            fontSize: '16px'
          }}>
            Group Stage
          </button>
          <button onClick={() => setActiveTab('playoffs')} style={{
            padding: '8px 16px',
            backgroundColor: 'transparent',
            color: activeTab === 'playoffs' ? '#D4AF37' : '#AAA',
            border: 'none',
            borderBottom: activeTab === 'playoffs' ? '2px solid #D4AF37' : 'none',
            cursor: 'pointer',
            fontWeight: activeTab === 'playoffs' ? 'bold' : 'normal',
            fontSize: '16px'
          }}>
            Semifinals & Finals
          </button>
          <button onClick={() => setActiveTab('matches')} style={{
            padding: '8px 16px',
            backgroundColor: 'transparent',
            color: activeTab === 'matches' ? '#D4AF37' : '#AAA',
            border: 'none',
            borderBottom: activeTab === 'matches' ? '2px solid #D4AF37' : 'none',
            cursor: 'pointer',
            fontWeight: activeTab === 'matches' ? 'bold' : 'normal',
            fontSize: '16px'
          }}>
            Match Results
          </button>
        </div>
        
        {/* Group Stage Content */}
        {activeTab === 'standings' && (
          <div>
            <h2 style={{
              color: '#FF7A00',
              fontSize: '22px',
              margin: '10px 0'
            }}>
              Team Standings
            </h2>
            
            {/* Team Standings Table */}
            <div style={{
              backgroundColor: '#2D2D2D',
              borderRadius: '5px',
              marginBottom: '15px',
              overflow: 'hidden'
            }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '14px'
              }}>
                <thead>
                  <tr style={{
                    backgroundColor: '#333',
                    borderBottom: '1px solid #444'
                  }}>
                    <th style={{
                      padding: '8px',
                      textAlign: 'center',
                      color: '#D4AF37'
                    }}>Rank</th>
                    <th style={{
                      padding: '8px',
                      textAlign: 'left',
                      color: '#D4AF37'
                    }}>Team</th>
                    <th style={{
                      padding: '8px',
                      textAlign: 'left',
                      color: '#D4AF37'
                    }}>Players</th>
                    <th style={{
                      padding: '8px',
                      textAlign: 'center',
                      color: '#D4AF37'
                    }}>Played</th>
                    <th style={{
                      padding: '8px',
                      textAlign: 'center',
                      color: '#D4AF37'
                    }}>Won</th>
                    <th style={{
                      padding: '8px',
                      textAlign: 'center',
                      color: '#D4AF37'
                    }}>Lost</th>
                    <th style={{
                      padding: '8px',
                      textAlign: 'center',
                      color: '#D4AF37'
                    }}>Points</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedTeams.map((team, index) => (
                    <tr key={team.id} style={{
                      backgroundColor: index < 4 ? '#2A2A2A' : 'transparent',
                      borderBottom: '1px solid #444',
                      borderLeft: `4px solid ${team.color}`
                    }}>
                      <td style={{
                        padding: '8px',
                        textAlign: 'center'
                      }}>
                        <span style={{
                          display: 'inline-block',
                          width: '24px',
                          height: '24px',
                          lineHeight: '24px',
                          borderRadius: '50%',
                          backgroundColor: '#222',
                          border: '1px solid #D4AF37',
                          color: '#D4AF37',
                          fontWeight: 'bold',
                          textAlign: 'center'
                        }}>
                          {index + 1}
                        </span>
                      </td>
                      <td style={{
                        padding: '8px',
                        whiteSpace: 'nowrap'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          <span style={{
                            marginRight: '8px',
                            fontSize: '20px'
                          }}>{team.icon}</span>
                          <div>
                            <div style={{
                              fontWeight: 'bold',
                              color: 'white'
                            }}>{team.name}</div>
                            <div style={{
                              fontSize: '12px',
                              color: '#AAA'
                            }}>({team.animal})</div>
                          </div>
                        </div>
                      </td>
                      <td style={{
                        padding: '8px',
                        color: '#DDD'
                      }}>{team.players.join(', ')}</td>
                      <td style={{
                        padding: '8px',
                        textAlign: 'center',
                        color: 'white'
                      }}>{team.matchesPlayed}</td>
                      <td style={{
                        padding: '8px',
                        textAlign: 'center',
                        color: 'white'
                      }}>{team.matchesWon}</td>
                      <td style={{
                        padding: '8px',
                        textAlign: 'center',
                        color: 'white'
                      }}>{team.matchesLost}</td>
                      <td style={{
                        padding: '8px',
                        textAlign: 'center'
                      }}>
                        <span style={{
                          display: 'inline-block',
                          minWidth: '30px',
                          padding: '3px 8px',
                          borderRadius: '12px',
                          backgroundColor: '#D4AF37',
                          color: 'black',
                          fontWeight: 'bold',
                          textAlign: 'center'
                        }}>
                          {team.points}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Scoring Info */}
            <div style={{
              backgroundColor: '#2D2D2D',
              borderRadius: '5px',
              padding: '10px 15px',
              marginBottom: '15px',
              fontSize: '14px'
            }}>
              <h3 style={{
                color: '#D4AF37',
                margin: '5px 0 10px',
                fontSize: '16px'
              }}>
                Scoring System
              </h3>
              <ul style={{
                margin: '0',
                paddingLeft: '20px',
                color: '#DDD'
              }}>
                <li style={{ marginBottom: '5px' }}>Win: 2 points</li>
                <li style={{ marginBottom: '5px' }}>Loss: 0 points</li>
                <li>No Result: Match not counted in statistics</li>
              </ul>
            </div>
            
            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '15px',
              marginTop: '15px'
            }}>
              <button onClick={() => setShowAddDialog(true)} style={{
                padding: '8px 16px',
                borderRadius: '20px',
                background: 'linear-gradient(to right, #FF7A00, #D4AF37)',
                color: 'black',
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
              }}>
                <span style={{marginRight: '5px'}}>+</span> 
                Add Match Result
              </button>
              
              <button onClick={generateSemifinals} style={{
                padding: '8px 16px',
                borderRadius: '20px',
                backgroundColor: '#6A00FF',
                color: 'white',
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer'
              }}>
                Generate Semifinals
              </button>
            </div>
          </div>
        )}
        
        {/* Matches Results Tab */}
        {activeTab === 'matches' && (
          <div>
            <h2 style={{
              color: '#FF7A00',
              fontSize: '22px',
              margin: '10px 0'
            }}>
              Match Results
            </h2>
            
            {playedMatches.length > 0 ? (
              <div style={{
                backgroundColor: '#2D2D2D',
                borderRadius: '5px',
                marginBottom: '15px',
                overflow: 'hidden'
              }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '14px'
                }}>
                  <thead>
                    <tr style={{
                      backgroundColor: '#333',
                      borderBottom: '1px solid #444'
                    }}>
                      <th style={{
                        padding: '8px',
                        textAlign: 'left',
                        color: '#D4AF37'
                      }}>Match ID</th>
                      <th style={{
                        padding: '8px',
                        textAlign: 'left',
                        color: '#D4AF37'
                      }}>Teams</th>
                      <th style={{
                        padding: '8px',
                        textAlign: 'center',
                        color: '#D4AF37'
                      }}>Result</th>
                      <th style={{
                        padding: '8px',
                        textAlign: 'center',
                        color: '#D4AF37'
                      }}>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                  {playedMatches.sort((a, b) => new Date(b.date) - new Date(a.date)).map((match) => (
                      <tr key={match.matchId} style={{
                        borderBottom: '1px solid #444'
                      }}>
                        <td style={{
                          padding: '8px',
                          textAlign: 'center',
                          color: '#DDD'
                        }}>
                          {match.matchId}
                        </td>
                        <td style={{
                          padding: '8px',
                          color: 'white'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ marginRight: '5px', fontSize: '18px' }}>
                              {getTeamDetails(match.team1).icon}
                            </span>
                            {match.team1} vs {match.team2}
                            <span style={{ marginLeft: '5px', fontSize: '18px' }}>
                              {getTeamDetails(match.team2).icon}
                            </span>
                          </div>
                        </td>
                        <td style={{
                          padding: '8px',
                          textAlign: 'center'
                        }}>
                          {match.resultType === 'win' ? (
                            <span style={{
                              display: 'inline-block',
                              padding: '3px 8px',
                              borderRadius: '12px',
                              backgroundColor: '#D4AF37',
                              color: 'black',
                              fontWeight: 'bold'
                            }}>
                              Winner: {match.winner}
                            </span>
                          ) : (
                            <span style={{
                              display: 'inline-block',
                              padding: '3px 8px',
                              borderRadius: '12px',
                              backgroundColor: '#555',
                              color: 'white',
                              fontStyle: 'italic'
                            }}>
                              No Result
                            </span>
                          )}
                        </td>
                        <td style={{
                          padding: '8px',
                          textAlign: 'center',
                          color: '#AAA',
                          fontSize: '12px'
                        }}>
                          {new Date(match.date).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div style={{
                backgroundColor: '#2D2D2D',
                borderRadius: '5px',
                padding: '30px',
                textAlign: 'center',
                color: '#AAA'
              }}>
                No match results recorded yet. Add your first match result from the Group Stage tab.
              </div>
            )}
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '15px'
            }}>
              <button onClick={() => setShowAddDialog(true)} style={{
                padding: '8px 16px',
                borderRadius: '20px',
                background: 'linear-gradient(to right, #FF7A00, #D4AF37)',
                color: 'black',
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
              }}>
                <span style={{marginRight: '5px'}}>+</span> 
                Add Match Result
              </button>
            </div>
          </div>
        )}
        
        {/* Playoffs Content */}
        {activeTab === 'playoffs' && (
          <div>
            {/* Semifinals Section */}
            <div style={{
              marginBottom: '20px'
            }}>
              <h2 style={{
                color: '#9966FF',
                fontSize: '22px',
                margin: '10px 0'
              }}>
                Semifinals (Best of 3 Sets)
              </h2>
              
              <div style={{
                display: 'flex',
                flexDirection: window.innerWidth > 768 ? 'row' : 'column',
                gap: '15px',
                marginTop: '10px'
              }}>
                {playoffs.semifinals.map((match, index) => (
                  <div key={match.id} style={{
                    flex: 1,
                    backgroundColor: '#2D2D2D',
                    borderRadius: '8px',
                    padding: '15px',
                    border: '1px solid #6A00FF'
                  }}>
                    <h3 style={{
                      color: '#9966FF',
                      marginTop: '0',
                      marginBottom: '15px',
                      fontSize: '18px'
                    }}>
                      Semifinal {index + 1}
                    </h3>
                    
                    {match.team1 && match.team2 ? (
                      <>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '10px'
                        }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center'
                          }}>
                            <span style={{
                              marginRight: '8px',
                              fontSize: '20px'
                            }}>{getTeamDetails(match.team1).icon}</span>
                            <span style={{
                              fontWeight: 'bold',
                              color: 'white'
                            }}>{match.team1}</span>
                          </div>
                          <div style={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: 'white'
                          }}>
                            {match.scores && match.scores[0] !== null ? match.scores[0] : '-'}
                          </div>
                        </div>
                        
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '15px'
                        }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center'
                          }}>
                            <span style={{
                              marginRight: '8px',
                              fontSize: '20px'
                            }}>{getTeamDetails(match.team2).icon}</span>
                            <span style={{
                              fontWeight: 'bold',
                              color: 'white'
                            }}>{match.team2}</span>
                          </div>
                          <div style={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: 'white'
                          }}>
                            {match.scores && match.scores[1] !== null ? match.scores[1] : '-'}
                          </div>
                        </div>
                        
                        {match.winner ? (
                          <div style={{
                            backgroundColor: '#6A00FF',
                            padding: '8px',
                            borderRadius: '5px',
                            textAlign: 'center',
                            marginTop: '10px'
                          }}>
                            <span style={{
                              color: 'white'
                            }}>Winner: </span>
                            <span style={{
                              fontWeight: 'bold',
                              color: 'white'
                            }}>{match.winner}</span>
                          </div>
                        ) : (
                          <button 
                            onClick={() => {
                              setPlayoffMatch({
                                type: 'semifinal',
                                matchId: match.id,
                                team1Score: '',
                                team2Score: ''
                              });
                              setShowPlayoffsDialog(true);
                            }}
                            style={{
                              width: '100%',
                              padding: '8px',
                              backgroundColor: '#6A00FF',
                              color: 'white',
                              border: 'none',
                              borderRadius: '5px',
                              cursor: 'pointer',
                              marginTop: '10px'
                            }}
                          >
                            Record Result
                          </button>
                        )}
                      </>
                    ) : (
                      <div style={{
                        textAlign: 'center',
                        padding: '20px 0',
                        color: '#AAA'
                      }}>
                        No teams assigned yet. Generate semifinals from the Group Stage tab.
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Finals Section */}
            <div>
              <h2 style={{
                color: '#D4AF37',
                fontSize: '22px',
                margin: '10px 0'
              }}>
                Final (Best of 3 Sets)
              </h2>
              
              <div style={{
                backgroundColor: '#2D2D2D',
                borderRadius: '8px',
                padding: '20px',
                border: '1px solid #D4AF37',
                maxWidth: '500px',
                margin: '0 auto'
              }}>
                <h3 style={{
                  color: '#D4AF37',
                  textAlign: 'center',
                  marginTop: '0',
                  marginBottom: '20px',
                  fontSize: '18px'
                }}>
                  Championship Match
                </h3>
                
                {playoffs.final.team1 && playoffs.final.team2 ? (
                  <>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '15px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <span style={{
                          marginRight: '10px',
                          fontSize: '24px'
                        }}>{getTeamDetails(playoffs.final.team1).icon}</span>
                        <span style={{
                          fontWeight: 'bold',
                          color: 'white',
                          fontSize: '18px'
                        }}>{playoffs.final.team1}</span>
                      </div>
                      <div style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: 'white',
                        backgroundColor: '#222',
                        padding: '5px 15px',
                        borderRadius: '5px'
                      }}>
                        {playoffs.final.scores && playoffs.final.scores[0] !== null ? playoffs.final.scores[0] : '-'}
                      </div>
                    </div>
                    
                    <div style={{
                      textAlign: 'center',
                      margin: '10px 0',
                      color: '#D4AF37',
                      fontSize: '18px'
                    }}>
                      vs
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '15px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <span style={{
                          marginRight: '10px',
                          fontSize: '24px'
                        }}>{getTeamDetails(playoffs.final.team2).icon}</span>
                        <span style={{
                          fontWeight: 'bold',
                          color: 'white',
                          fontSize: '18px'
                        }}>{playoffs.final.team2}</span>
                      </div>
                      <div style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: 'white',
                        backgroundColor: '#222',
                        padding: '5px 15px',
                        borderRadius: '5px'
                      }}>
                        {playoffs.final.scores && playoffs.final.scores[1] !== null ? playoffs.final.scores[1] : '-'}
                      </div>
                    </div>
                    
                    {playoffs.final.winner ? (
                      <div style={{
                        margin: '20px 0 10px',
                      }}>
                        <div style={{
                          background: 'linear-gradient(to right, #FF7A00, #D4AF37)',
                          padding: '15px',
                          borderRadius: '8px',
                          textAlign: 'center'
                        }}>
                          <div style={{
                            fontSize: '16px',
                            fontWeight: 'bold',
                            marginBottom: '5px',
                            color: 'black'
                          }}>Tournament Champion</div>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <span style={{
                              fontSize: '30px',
                              marginRight: '10px'
                            }}>{getTeamDetails(playoffs.final.winner).icon}</span>
                            <span style={{
                              fontSize: '22px',
                              fontWeight: 'bold',
                              color: 'black'
                            }}>{playoffs.final.winner}</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <button 
                        onClick={() => {
                          setPlayoffMatch({
                            type: 'final',
                            matchId: 'F',
                            team1Score: '',
                            team2Score: ''
                          });
                          setShowPlayoffsDialog(true);
                        }}
                        style={{
                          width: '100%',
                          padding: '10px',
                          backgroundColor: '#D4AF37',
                          color: 'black',
                          border: 'none',
                          borderRadius: '5px',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          marginTop: '15px'
                        }}
                      >
                        Record Final Result
                      </button>
                    )}
                  </>
                ) : (
                  <div style={{
                    textAlign: 'center',
                    padding: '30px 0',
                    color: '#AAA'
                  }}>
                    Waiting for semifinal winners to be determined.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      
      {/* Add Match Result Dialog */}
      {showAddDialog && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100
        }}>
          <div style={{
            backgroundColor: '#222',
            borderRadius: '10px',
            padding: '20px',
            maxWidth: '500px',
            width: '100%',
            border: '1px solid #D4AF37'
          }}>
            <h3 style={{
              color: '#D4AF37',
              borderBottom: '1px solid #444',
              paddingBottom: '10px',
              marginTop: '0',
              fontSize: '18px'
            }}>
              Record Match Result
            </h3>
            
            <div style={{
              marginBottom: '15px'
            }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: 'white',
                fontWeight: 'bold'
              }}>
                Match:
              </label>
              <select 
                value={`${selectedMatch.team1}|${selectedMatch.team2}`}
                onChange={(e) => {
                  const [team1, team2] = e.target.value.split('|');
                  setSelectedMatch({ ...selectedMatch, team1, team2, winner: '', resultType: 'win' });
                }}
                style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#333',
                  color: 'white',
                  border: '1px solid #666',
                  borderRadius: '5px'
                }}
              >
                <option value="">Select Match</option>
                {getUnplayedMatches().map((match) => (
                  <option key={match.id} value={`${match.teams[0]}|${match.teams[1]}`}>
                    Match {match.id}: {match.teams[0]} vs {match.teams[1]}
                  </option>
                ))}
              </select>
            </div>
            
            {selectedMatch.team1 && selectedMatch.team2 && (
              <>
                <div style={{
                  marginBottom: '15px'
                }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    Result Type:
                  </label>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px'
                  }}>
                    <button
                      onClick={() => setSelectedMatch({ ...selectedMatch, resultType: 'win', winner: '' })}
                      style={{
                        padding: '10px',
                        backgroundColor: selectedMatch.resultType === 'win' ? '#333' : 'transparent',
                        border: `2px solid ${selectedMatch.resultType === 'win' ? '#D4AF37' : '#666'}`,
                        borderRadius: '5px',
                        color: selectedMatch.resultType === 'win' ? '#D4AF37' : 'white',
                        cursor: 'pointer',
                        textAlign: 'center'
                      }}
                    >
                      Win (2 points)
                    </button>
                    <button
                      onClick={() => setSelectedMatch({ ...selectedMatch, resultType: 'no-result', winner: '' })}
                      style={{
                        padding: '10px',
                        backgroundColor: selectedMatch.resultType === 'no-result' ? '#333' : 'transparent',
                        border: `2px solid ${selectedMatch.resultType === 'no-result' ? '#D4AF37' : '#666'}`,
                        borderRadius: '5px',
                        color: selectedMatch.resultType === 'no-result' ? '#D4AF37' : 'white',
                        cursor: 'pointer',
                        textAlign: 'center'
                      }}
                    >
                      No Result
                    </button>
                  </div>
                </div>
                
                {selectedMatch.resultType === 'win' && (
                  <div style={{
                    marginBottom: '20px'
                  }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      color: 'white',
                      fontWeight: 'bold'
                    }}>
                      Winner:
                    </label>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '10px'
                    }}>
                      <button
                        onClick={() => setSelectedMatch({ ...selectedMatch, winner: selectedMatch.team1 })}
                        style={{
                          padding: '10px',
                          backgroundColor: selectedMatch.winner === selectedMatch.team1 ? '#333' : 'transparent',
                          border: `2px solid ${selectedMatch.winner === selectedMatch.team1 ? '#D4AF37' : '#666'}`,
                          borderRadius: '5px',
                          color: selectedMatch.winner === selectedMatch.team1 ? '#D4AF37' : 'white',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <span style={{
                          fontSize: '20px',
                          marginRight: '5px'
                        }}>{getTeamDetails(selectedMatch.team1).icon}</span>
                        {selectedMatch.team1}
                      </button>
                      <button
                        onClick={() => setSelectedMatch({ ...selectedMatch, winner: selectedMatch.team2 })}
                        style={{
                          padding: '10px',
                          backgroundColor: selectedMatch.winner === selectedMatch.team2 ? '#333' : 'transparent',
                          border: `2px solid ${selectedMatch.winner === selectedMatch.team2 ? '#D4AF37' : '#666'}`,
                          borderRadius: '5px',
                          color: selectedMatch.winner === selectedMatch.team2 ? '#D4AF37' : 'white',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <span style={{
                          fontSize: '20px',
                          marginRight: '5px'
                        }}>{getTeamDetails(selectedMatch.team2).icon}</span>
                        {selectedMatch.team2}
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
            
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '10px',
              marginTop: '20px'
            }}>
              <button 
                onClick={() => setShowAddDialog(false)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'transparent',
                  border: '1px solid #666',
                  borderRadius: '5px',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button 
                onClick={recordMatchResult}
                style={{
                  padding: '8px 16px',
                  background: 'linear-gradient(to right, #FF7A00, #D4AF37)',
                  color: 'black',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Save Result
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Playoff Match Result Dialog */}
      {showPlayoffsDialog && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100
        }}>
          <div style={{
            backgroundColor: '#222',
            borderRadius: '10px',
            padding: '20px',
            maxWidth: '500px',
            width: '100%',
            border: `1px solid ${playoffMatch.type === 'semifinal' ? '#6A00FF' : '#D4AF37'}`
          }}>
            <h3 style={{
              color: playoffMatch.type === 'semifinal' ? '#9966FF' : '#D4AF37',
              borderBottom: '1px solid #444',
              paddingBottom: '10px',
              marginTop: '0',
              fontSize: '18px'
            }}>
              Record {playoffMatch.type === 'semifinal' ? 'Semifinal' : 'Final'} Result
            </h3>
            
            <div style={{
              marginBottom: '15px',
              textAlign: 'center',
              color: 'white',
              padding: '10px 0'
            }}>
              Enter the score (sets won) for each team
            </div>
            
            {playoffMatch.type === 'semifinal' && (
              <>
                <div style={{
                  marginBottom: '15px'
                }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    {playoffs.semifinals.find(m => m.id === playoffMatch.matchId)?.team1}:
                  </label>
                  <input 
                    type="number" 
                    min="0"
                    max="2"
                    value={playoffMatch.team1Score}
                    onChange={(e) => setPlayoffMatch({...playoffMatch, team1Score: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '10px',
                      backgroundColor: '#333',
                      color: 'white',
                      border: '1px solid #666',
                      borderRadius: '5px'
                    }}
                  />
                </div>
                <div style={{
                  marginBottom: '15px'
                }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    {playoffs.semifinals.find(m => m.id === playoffMatch.matchId)?.team2}:
                  </label>
                  <input 
                    type="number"
                    min="0"
                    max="2" 
                    value={playoffMatch.team2Score}
                    onChange={(e) => setPlayoffMatch({...playoffMatch, team2Score: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '10px',
                      backgroundColor: '#333',
                      color: 'white',
                      border: '1px solid #666',
                      borderRadius: '5px'
                    }}
                  />
                </div>
              </>
            )}
            
            {playoffMatch.type === 'final' && (
              <>
                <div style={{
                  marginBottom: '15px'
                }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    {playoffs.final.team1}:
                  </label>
                  <input 
                    type="number"
                    min="0"
                    max="2" 
                    value={playoffMatch.team1Score}
                    onChange={(e) => setPlayoffMatch({...playoffMatch, team1Score: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '10px',
                      backgroundColor: '#333',
                      color: 'white',
                      border: '1px solid #666',
                      borderRadius: '5px'
                    }}
                  />
                </div>
                <div style={{
                  marginBottom: '15px'
                }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    {playoffs.final.team2}:
                  </label>
                  <input 
                    type="number"
                    min="0"
                    max="2" 
                    value={playoffMatch.team2Score}
                    onChange={(e) => setPlayoffMatch({...playoffMatch, team2Score: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '10px',
                      backgroundColor: '#333',
                      color: 'white',
                      border: '1px solid #666',
                      borderRadius: '5px'
                    }}
                  />
                </div>
              </>
            )}
            
            <p style={{
              color: '#AAA',
              fontSize: '12px',
              marginTop: '5px'
            }}>
              Note: Best of 3 sets, score should be 2-0, 2-1, 1-2, or 0-2
            </p>
            
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '10px',
              marginTop: '20px'
            }}>
              <button 
                onClick={() => setShowPlayoffsDialog(false)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'transparent',
                  border: '1px solid #666',
                  borderRadius: '5px',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button 
                onClick={recordPlayoffResult}
                style={{
                  padding: '8px 16px',
                  background: playoffMatch.type === 'semifinal' 
                    ? 'linear-gradient(to right, #6A00FF, #9966FF)' 
                    : 'linear-gradient(to right, #FF7A00, #D4AF37)',
                  color: playoffMatch.type === 'semifinal' ? 'white' : 'black',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Save Result
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Footer with Reset Button */}
      <div style={{
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        borderTop: '1px solid #444'
      }}>
        <button 
          onClick={resetTournament}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '8px 12px',
            backgroundColor: '#A00',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          <span style={{marginRight: '5px'}}>🗑️</span> 
          Reset Tournament Data
        </button>
        
        <div style={{
          textAlign: 'center',
          color: '#AAA',
          fontSize: '14px'
        }}>
          <p style={{margin: '2px 0'}}>Designed & Developed by</p>
          <p style={{margin: '2px 0', color: '#D4AF37', fontWeight: 'bold'}}>Pretom Roy Chowdhury</p>
        </div>
      </div>
    </div>
  );
};

// Render the app to the DOM
ReactDOM.render(<BadmintonScoreboard />, document.getElementById('root'));