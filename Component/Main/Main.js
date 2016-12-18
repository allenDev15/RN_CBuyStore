

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator
} from 'react-native';


/*---导入外部组件类---*/
import TabNavigator from 'react-native-tab-navigator';
 
var HomeView = require('../Home/Home.js');
var ShopView = require('../Shop/Shop.js');
var MineView = require('../Mine/Mine.js');
var MoreView = require('../More/More.js');


var Main = React.createClass({
    getInitialState(){
        return{
            selectedTab:'home'
        }
    },

    render() {
        return (
              <TabNavigator>
                    {/**首页 */}
                    {this.renderTabBarItem('首页','home','icon_tabbar_homepage','icon_tabbar_homepage_selected',0,HomeView)}
                    
                    {/**商家 */}
                    {this.renderTabBarItem('商家','shop','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected',0,ShopView)}

                    {/**我的 */}
                    {this.renderTabBarItem('我的','mine','icon_tabbar_mine','icon_tabbar_mine_selected',0,MineView)}

                    {/**更多 */}
                    {this.renderTabBarItem('更多','more','icon_tabbar_misc','icon_tabbar_misc_selected',1,MoreView)}
              
              </TabNavigator>

        );
    },
    renderTabBarItem(title,selectedTab,icon,selectedIcon,badgeText,ModuleView){
        return(
            <TabNavigator.Item 
                        title={title}
                        selected={this.state.selectedTab === selectedTab}
                        renderIcon={() => <Image source={{uri:icon}} style={styles.iconStyle} />}
                        renderSelectedIcon={() => <Image source={{uri:selectedIcon}} style={styles.iconStyle} />}
                        badgeText={badgeText}
                        onPress={() => this.setState({ selectedTab: selectedTab })}
                        selectedTitleStyle={styles.selectedTitleStyle}
                    >
                <Navigator 
                        initialRoute={{name:selectedTab,component:ModuleView}}
                        configureScene={()=>{return Navigator.SceneConfigs.PushFromLeft}}

                        renderScene={(route,navigator)=>{
                              let Component = route.component;
                              return <Component {...route.passProps} navigator={navigator} />
                        }}
                />
                    

            </TabNavigator.Item>
        )
    }
});

const styles = StyleSheet.create({
    iconStyle:{
      width:30,
      height:30
    },
    selectedTitleStyle:{
        color:'orange'
    }
})

module.exports = Main;