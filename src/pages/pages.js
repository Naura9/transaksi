import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './home'
import Login from './login'
import Register from './register'
import Pegawai from './pegawai'
import Siswa from './siswa'
import Pelanggaran from './pelanggaran'
import PelanggaranSiswa from './pelanggaran_siswa'

const Pages = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/pegawai' component={Pegawai} />
        <Route path='/pelanggaran' component={Pelanggaran} />
        <Route path='/siswa' component={Siswa} />
        <Route path='/pelanggaran_siswa' component={PelanggaranSiswa} />
    </Switch>
)

export default Pages
