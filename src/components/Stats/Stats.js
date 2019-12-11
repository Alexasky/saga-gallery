import React from 'react'
import './styles.css'

const Stats = ({stats}) => {
  if(!stats){
    return <span>Loading...</span>
  }
  return (
    <>
    { (stats.downloads !== 0 && stats.likes !== 0) || (stats.downloads === 0 && stats.likes !== 0) || (stats.downloads !== 0 && stats.likes === 0)
      ? <div className='stats'>
          <span>{stats.error && 'error!'}</span>
          <span>{stats.isLoading && 'Loading...'}</span>
          <span className='stats-likes'>{stats.likes !== 0 && `👍 ${stats.likes}` }</span>
          <span className='stats-downloads'>{stats.downloads !== 0 && `🤘 ${stats.downloads}` }</span>
        </div>
      : null
    }

    </>
  )
}

export default Stats
