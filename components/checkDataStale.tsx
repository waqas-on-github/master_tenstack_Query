/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';


const CheckDataStale = ({ isStale, refetch }: { isStale: boolean; refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<any, Error>> }) => {
    return (
        <>
            {isStale ? <div>data is outdated <button onClick={() => { refetch() }}>refetch now</button></div> : <div>data is uptodate</div>}
        </>
    )
}

export default CheckDataStale