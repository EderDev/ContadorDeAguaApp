import React, { Component } from 'react'
import { View, ImageBackground, StyleSheet, Text, Button } from 'react-native'

export default class ContadoDeAgua extends Component{
  constructor(props){
    super(props)
    this.state = {consumido:0, status:'Ruim', pct:0}

    this.drinkWater = this.drinkWater.bind(this)
    this.atualizar = this.atualizar.bind(this)
  }

  atualizar(){
    let s = this.state
    s.pct = ((s.consumido/2000) *100)

    if(s.pct >= 100){
      s.status = 'Bom'
    }else{
      s.status = 'Ruim'
    }

    this.setState(s)
  }

  drinkWater(){
    let s = this.state
    s.consumido += 200
    this.setState(s)

    this.atualizar()
  }
  render(){
    return(
      <View style={styles.body}>
        <ImageBackground source={require('./images/waterbg.png')} style={styles.bgimage}>
          <View>
            <View style={styles.infoarea}>
              <View style={styles.area}>
                <Text style={styles.areatitulo}>Meta</Text>
                <Text style={styles.areaDado}>2000ml</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.areatitulo}>Consumido</Text>
                <Text style={styles.areaDado}>{this.state.consumido}ml</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.areatitulo}>Status</Text>
                <Text style={styles.areaDado}>{this.state.status}</Text>
              </View>
            </View>
            <View style={styles.pctArea}>
              <Text style={styles.pctTexto}>{this.state.pct}%</Text>
            </View>
            <View style={styles.btnArea}>
              <Button title='Beber 200ml' onPress={this.drinkWater}/>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body:{
    flex:1
  },
  bgimage:{
    flex:1,
    width:null
  },
  infoarea:{
    flex:1,
    flexDirection:'row'
  },
  area:{
    flex:1,
    alignItems:'center',
    marginTop:70
  },
  areatitulo:{
    color:'#45b2fc',
    fontWeight:'bold'
  },
  areaDado:{
    color:'#2b4274',
    fontSize: 15,
    fontWeight:'bold'
  },
  pctArea:{
    marginTop:230,
    
  },
  pctTexto:{
    fontSize:80,
    color:'#FFF',
    textAlign:'center'
  },
  btnArea:{
    width:230,
    marginTop:50,
    alignSelf:'center',
    color:'red'
  }
})