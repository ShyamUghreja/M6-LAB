import React from 'react'
import Allhero from '../../shared/all-hero/all-hero'
import Researchcard from '../../shared/research-card/research-card'
import Latestproject from '../../shared/latest-project/latest-project'
import Ecosystem from '../../shared/ecosystem/ecosystem'
import Allresearch from '../../shared/all-research/all-research'

const News = () => {
    return (
        <>
            <Allhero />
            <Researchcard />
            <Latestproject />
            <Ecosystem />
            <Allresearch />
        </>
    )
}

export default News