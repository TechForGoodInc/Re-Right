import React from "react";
import {
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import '../../../config/global';
import color from '../../../config/colors';
import darkColors from '../../../config/darkColors';

const ReportAbuseRecapRightsScreen = ({navigation}) => {
  const colors = global.isDarkModeEnabled? darkColors: color; 
  const ArticleFacts = [
    {
      title: 'Article 1: Free and equal',
      description: 'All human beings are born free and equal in dignity and rights.\nThey are endowed with reason and conscience and should act towards one another in a spirit of brotherhood.',
    },

    {
      title: 'Article 2: Freedom from discrimination',
      description: 'Everyone is entitled to all the rights and freedoms set forth in this Declaration, without distinction of any kind, such as race, colour, sex, language, religion, political or other opinion, national or social origin, property, birth or other status.\nFurthermore, no distinction shall be made on the basis of the political, jurisdictional or international status of the country or territory to which a person belongs, whether it be independent, trust, non-self-governing or under any other limitation of sovereignty.',
    },

    {
      title: 'Article 3: Right to life',
      description: 'Everyone has the right to life, liberty and security of person.',
    },

    {
      title: 'Article 4: Freedom from slavery',
      description: 'No one shall be held in slavery or servitude; slavery and the slave trade shall be prohibited in all their forms.',
    },

    {
      title: 'Article 5: Freedom from torture',
      description: 'No one shall be subjected to torture or to cruel, inhuman or degrading treatment or punishment.',
    },

    {
      title: 'Article 6: Right to recognition before the law',
      description: 'Everyone has the right to recognition everywhere as a person before the law.',
    },

    {
      title: 'Article 7: Right to equality before the law',
      description: 'All are equal before the law and are entitled without any discrimination to equal protection of the law. All are entitled to equal protection against any discrimination in violation of this Declaration and against any incitement to such discrimination.',
    },
    
    {
      title: 'Article 8: Access to justice',
      description: 'Everyone has the right to an effective remedy by the competent national tribunals for acts violating the fundamental rights granted him by the constitution or by law.',
    },
    
    {
      title: 'Article 9: Freedom from arbitrary detention',
      description: 'No one shall be subjected to arbitrary arrest, detention or exile.',
    },
    
    {
      title: 'Article 10: Right to a fair trial',
      description: 'Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him.',
    },
    
    {
      title: 'Article 11: Presumption of innocence',
      description: 'Everyone charged with a penal offence has the right to be presumed innocent until proved guilty according to law in a public trial at which he has had all the guarantees necessary for his defence. No one shall be held guilty of any penal offence on account of any act or omission which did not constitute a penal offence, under national or international law, at the time when it was committed. Nor shall a heavier penalty be imposed than the one that was applicable at the time the penal offence was committed.',
    },
    
    {
      title: 'Article 12: Right to privacy',
      description: 'No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation. \n Everyone has the right to the protection of the law against such interference or attacks.',
    },
    
    {
      title: 'Article 13: Freedom of movement',
      description: 'Everyone has the right to freedom of movement and residence within the borders of each State. \n Everyone has the right to leave any country, including his own, and to return to his country.',
    },
    
    {
      title: 'Article 14: Right to asylum',
      description: 'Everyone has the right to seek and to enjoy in other countries asylum from persecution. \n This right may not be invoked in the case of prosecutions genuinely arising from non-political crimes or from acts contrary to the purposes and principles of the United Nations.',
    },
    
    {
      title: 'Article 15: Right to nationality',
      description: 'Everyone has the right to a nationality. \n No one shall be arbitrarily deprived of his nationality nor denied the right to change his nationality. ',
    },
    
    {
      title: 'Article 16: Right to marriage and to found a family',
      description: 'Men and women of full age, without any limitation due to race, nationality or religion, have the right to marry and to found a family. They are entitled to equal rights as to marriage, during marriage and at its dissolution. \n Marriage shall be entered into only with the free and full consent of the intending spouses. \n The family is the natural and fundamental group unit of society and is entitled to protection by society and the State.',
    },
    
    {
      title: 'Article 17: Right to own property',
      description: 'Everyone has the right to own property alone as well as in association with others. \n No one shall be arbitrarily deprived of his property.',
    },
    
    {
      title: 'Article 18: Freedom of religion or belief',
      description: 'Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance.',
    },
    
    {
      title: 'Article 19: Freedom of Expression',
      description: 'Everyone has the right to freedom of opinion and expression; this right includes freedom to hold opinions without interference and to seek receive and impart information and ideas though any media and regardless of frontiers.',
    },
    
    {
      title: 'Article 20: Freedom of assembly',
      description: 'Everyone has the right to freedom of peaceful assembly and association \n No one may be compelled to belong to an association.'
    },
    
    {
      title: 'Article 21: Right to partake in public affairs',
      description: 'Everyone has the right to take part in the government of his country, directly or through freely chosen representatives. \n Everyone has the right of equal access to public service in his country. \n The will of the people shall be the basis of the authority of government; this will shall be expressed in periodic and genuine elections which shall be by universal and equal suffrage and shall be held by secrete vote or by equivalent free voting procedures.',
    },
    
    {
      title: 'Article 22: Right to social security',
      description: 'Everyone, as a member of society, has the right to social security and is entitled to realization, through national effort and international cooperation and in accordance with the organization and resources of each State, of the economic, social and cultural rights indispensable for his dignity and the free development of his personality.',
    },
    
    {
      title: 'Article 23: Right to work',
      description: 'Everyone has the right to work, to free choice of employment, to just and favourable conditions of work and to protection against unemployment. \n Everyone, without any discrimination, has the right to equal pay for equal work. \n Everyone who works has the right to just and favourable remuneration ensuring for himself and his family an existence worthy of human dignity, and supplemented, if necessary, by other means of social protection. \n Everyone has the right to form and to join trade unions for the protection of his interests.',
    },
    
    {
      title: 'Article 24: Right to leisure and rest',
      description: 'Everyone has the right to rest and leisure, including reasonable limitation of working hours and periodic holidays with pay.',
    },
    
    {
      title: 'Article 25: Right to adequate standard of living',
      description: 'Everyone has the right to a standard of living adequate for the health and well-being of himself and of his family, including foods, clothing, housing and medical care and necessary social services, and the right to security in the event of unemployment, sickness, disability, widowhood, old age or other lack of livelihood in circumstances beyond his control. \n Motherhood and childhood are entitled to special care and assistance. All children, whether born in or out of wedlock, shall enjoy the same social protection.',
    },
    
    {
      title: 'Article 26: Right to education',
      description: 'Everyone has the right to education. Education shall be free, at least in the elementary and fundamental stages. Elementary education shall be compulsory. Technical and professional education shall be made generally available and higher education shall be equally accessible to all on the basis of merit. \n Education shall be directed to the full development of the human personality and to the strengthening of respect for human rights and fundamental freedoms. It shall promote understanding, tolerance and friendship among all nations, racial or religious groups, and shall further the activities of the United Nations for the maintenance of peace. \n Parents have a prior right to choose the kind of education that shall be given to their children.',
    },
    
    {
      title: 'Article 27: Right to take part in cultural, artistic and scientific life',
      description: 'Everyone has the right freely to participate in the cultural life of the community, to enjoy the arts and to share in scientific advancement and its benefits. \n Everyone has the right to the protection of the moral and material interests resulting from any scientific, literary or artistic production of which he is the author.',
    },
    
    {
      title: 'Article 28: Right to a free and fair world',
      description: 'Everyone is entitled to a social and international order in which the rights and freedoms set forth in this Declaration can be fully realized.',
    },
    
    {
      title: 'Article 29: Duty to your community',
      description: 'Everyone has duties to the community in which alone the free and full development of his personality is possible. \n In the exercise of his rights and freedoms, everyone shall be subject only to such limitations as are determined by law solely for the purpose of securing due recognition and respect for the rights and freedoms of others and of meeting the just requirements of morality, public order and the general welfare in a democratic society. \n These rights and freedoms may in no case be exercised contrary to the purposes and principles of the United Nations.',
    },
    
    {
      title: 'Article 30: Rights are inalienable',
      description: 'Nothing in this Declaration may be interpreted as implying for any State, group or person any right to engage in any activity or to perform any act aimed at the destruction of any of the rights and freedoms set forth herein.',
    },
  
  ];
  //all styles are here sorry for the mess but we need this for dark mode to work
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: colors.background_screen,
    },
    
    title: {
      fontSize: 25,
      alignSelf: 'center',
      fontWeight: 'bold',
      color: colors.text_screen_header,
      
    },
  
    subtitle: {
      fontSize: 15,
      marginLeft: 25,
      marginRight: 20,
      marginTop: 5,
      marginBottom: 10,
      alignSelf: 'center',
      color: colors.text_general,
    },
  
    recapboxes: {
      marginTop: 20,
    },
  
    button: {
      borderColor: colors.border,
      borderRadius:10,
      padding: 10,
      paddingRight: 20,
      alignSelf: "center",
      justifyContent: 'flex-start',
      width: "90%",
      margin: 15,
      borderWidth: 2,
      flexDirection: 'row',
      flex: 1,
      
      
    },
  
    buttonText: {
      fontSize: 18,
      alignSelf: "flex-start",
      lineHeight: 25,
      color: colors.text_general,
    },
    
    arrow: {
      width: 16,
      height: 16,
      alignSelf: 'center',
      tintColor: colors.tintColor,

    },
  
    quizButton: {
      borderWidth: 0,
      width: '40%',
      borderRadius: 10,
      alignSelf: 'center',
      padding: 10,
      margin: 10,
      borderColor: colors.border
    },
    
    quizText: {
      alignSelf: 'center',
      color: colors.text_quiz,
      
    },
  
  });

// create button and page for each element in ArticleFacts 
  const ReportAbuseRecapArticleList = () => { 
    return ArticleFacts.map((element) => {
      return (
        <TouchableOpacity 
          onPress={() => {
          navigation.navigate('Report RecapArticle', 
          {title : element.title, 
          description: element.description})
          }}
          style={styles.button}>
           <Image style={styles.arrow} source={require('../../../assets/right-arrow.png')}
      />
          <Text style={styles.buttonText}>{element.title}</Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    
    <SafeAreaView style={styles.background}>
      <ScrollView style={styles.recapboxes}>
        <Text style = {styles.title}>Know your Rights!</Text>
        <Text style = {styles.subtitle}>The Universal Declaration of Human Rights is a historic document which outlined the rights and freedoms everyone is entitled to.</Text>
          {ReportAbuseRecapArticleList()}
        <Pressable style={({pressed}) => [{
            backgroundColor: pressed ? colors.button_quiz_pressed : colors.button_quiz},
            styles.quizButton]} 
            onPress={() => navigation.navigate("Report Human Rights Quiz")} >
            <Text style={styles.quizText}>Take the Quiz Here!</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
    
  );
};



export default ReportAbuseRecapRightsScreen;
