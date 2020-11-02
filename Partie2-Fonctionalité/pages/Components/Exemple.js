import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Menu, {
    MenuProvider,
    MenuTrigger,
    MenuOptions,
    MenuOption,
    renderers,
} from 'react-native-popup-menu';

let unique = 0;
const { SlideInMenu } = renderers;

export default class Example extends Component {

    constructor(props, ctx) {
        super(props, ctx);
        this.state = { log: [] };
    }

    selectNumber(value) {
        this.addLog(`selecting number: ${value}`);
    }

    selectOptionType(value) {
        const v = typeof value === 'object' ? JSON.stringify(value) : value;
        this.addLog(`option de sélection: ${v}`);
        return value !== 'Do not close';
    }

    addLog(value) {
        this.setState({
            log: [...this.state.log, {
                value,
                id: ++unique,
            }],
        });
    }

    toggleHighlight(id) {
        const log = this.state.log.map(l => {
            if (l.id === id) {
                return Object.assign({}, l, { highlighted: !l.highlighted });
            }
            return l;
        })
        this.setState({ log });
    }

    deleteLogItem(id) {
        const log = this.state.log.filter(l => l.id !== id);
        this.setState({ log });
    }

    render() {
        return (
            <MenuProvider style={{ flex: 1 }}>
                <View style={styles.container}>

                    <View style={styles.topbar}>
                        
                        <View style={{ flex: 1 }}></View>
                        <Menu name="types" 
                           
                            onOpen={() => this.addLog('Réunion: CODIR \nTitre réunion: Réunion de la semaine\nDate Prévue: 17/07/2020\nHeure Prévue:09:00\nEtat: Planifier\nDate Création: 11/07/2020\nCréateur:Khalil')}
                        >
                            <MenuTrigger
                                onAlternativeAction={() => this.addLog('trigger longpressed')}
                                style={styles.trigger}>
                                <View style={{ flexDirection: "row", padding: 5, backgroundColor: "#F2F2F2" }}>
                                    <View>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fe9700' }}>IN 20 min</Text>
                                        <Text>04/09/2020 à 11h</Text>
                                    </View>
                                    <View>
                                        <Text style={{ marginLeft: 25, fontSize: 17, margin: 2, fontWeight: 'bold' }}>
                                            Réunion de la semaine
                        </Text>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ marginLeft: 25, fontSize: 14 }}>
                                                Salle S5
                                </Text>
                                            <Text style={{ marginLeft: 29, fontSize: 14 }}>
                                                ID : 123456789
                                </Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Image
                                            source={require('.././img/dots.png')}
                                            style={{ width: 25, height: 25, margin: 13 }}
                                        />
                                    </View>

                                </View>
                            </MenuTrigger>
                            <MenuOptions customStyles={{ optionText: styles.text }}>
                            <View style={{flexDirection:"row"}}>
                                    <Image
                                        source={require('.././img/modifier.png')}
                                        style={{ width: 15, height: 15, margin: 13 }}
                                    />
                                <MenuOption value="Modifier" text='Modifier' />
                            </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Image
                                        source={require('.././img/reporter.png')}
                                        style={{ width: 15, height: 15, margin: 13 }}
                                    />
                                    <MenuOption value="Reporter" text='Reporter' />
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Image
                                        source={require('.././img/annuler.png')}
                                        style={{ width: 15, height: 15, margin: 13 }}
                                    />
                                    <MenuOption value="Annuler" text='Annuler' />
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Image
                                        source={require('.././img/Archiver.png')}
                                        style={{ width: 15, height: 15, margin: 13 }}
                                    />
                                    <MenuOption value="Archiver" text='Archiver' />
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Image
                                        source={require('.././img/Supprimer.png')}
                                        style={{ width: 15, height: 15, margin: 13 }}
                                    />
                                    <MenuOption value="Supprimer" text='Supprimer' />
                                </View>

                                
                            </MenuOptions>
                        </Menu>
                    </View>

                    <ScrollView style={styles.logView}>
                        {this.state.log.map((l, i) => {
                            const wrapperStyle = { backgroundColor: i % 2 ? 'white' : 'whitesmoke' };
                            const textStyle = { color: l.highlighted ? 'red' : 'gray' };
                            return (
                                <View style={[styles.logItem, wrapperStyle]} key={l.id}>
                                    <Text style={[styles.text, textStyle]}>{l.value}</Text>
                                    <View style={{ flex: 1 }}></View>
                                    <Menu>
                                        <MenuTrigger text='edit' customStyles={{ triggerText: styles.text }} />
                                        <MenuOptions customStyles={{ optionText: styles.text }}>
                                            <MenuOption onSelect={() => this.toggleHighlight(l.id)} text={l.highlighted ? 'Unhighlight' : 'Highlight'} />
                                            <MenuOption onSelect={() => this.deleteLogItem(l.id)} text='Delete' />
                                        </MenuOptions>
                                    </Menu>
                                </View>
                            );
                        })}
                    </ScrollView>

                </View>
            </MenuProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F2F2F2',
    },
    topbar: {
        flexDirection: 'row',
        backgroundColor: '#F2F2F2',
        paddingTop: 15,
    },
    trigger: {
        padding: 5,
        margin: 5,
    },
    triggerText: {
        color: 'white',
    },
    disabled: {
        color: '#ccc',
    },
    divider: {
        marginVertical: 5,
        marginHorizontal: 2,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    logView: {
        flex: 1,
        flexDirection: 'column',
    },
    logItem: {
        flexDirection: 'row',
        padding: 8,
    },
    slideInOption: {
        padding: 5,
    },
    text: {
        fontSize: 18,
    },
});