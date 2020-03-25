import React from 'react';
import Spinner from 'react-spinner-material';

/**
 * 런치 스크린용 로딩 페이지.
 */
export default function LoadingSpinner() {
    return (
        <>
            <Spinner radius={10} color={"#333"} stroke={2} visible={true} />
        </>
    );
}