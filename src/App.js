import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppHeader from './components/atoms/AppHeader';
import FilesTable from './components/molecules/FilesTable'
import { useSelector } from 'react-redux'
import { selectAllFiles, fetchFiles, getFilesStatus } from './redux/files'


function App() {
  const dispatch = useDispatch()
  const files = useSelector(selectAllFiles)
  const fileStatus = useSelector(getFilesStatus)
  
  useEffect(() => {
    if (fileStatus === 'idle') {
      dispatch(fetchFiles())
    }
  }, [fileStatus, dispatch])
  return (
    <div className='d-flex flex-column justify-content-center'>
      <AppHeader />
      <FilesTable files={files}/>
    </div>
  );
}

export default App;
