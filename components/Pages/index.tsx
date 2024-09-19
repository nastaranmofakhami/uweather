import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  let name = "Turing Team"


  return (
    <div style={{ direction: "ltr", minHeight: "11vh", }}>
      <br-x />
      <Window title={name} style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)",
      backgroundImage:'url("https://cdn.ituring.ir/research/71/books/image/rain.webp")',
       }}>
        {/* <pre style={{ direction: "ltr" }}>{JSON.stringify(props, null, 2)}</pre> */}



        <c-x>
          <br-x/>
          <c-x style={{padding:"10px 114px", fontSize:40 , fontFamily:'wf'}}>Shiraz Weather</c-x>
          <br-x/>
          <f-cse>
            <f-cc style={{ height: 80, width: 300, backgroundColor: "gainsboro", borderRadius: 15 }}>
              <img src="https://cdn.ituring.ir/research/71/books/s.png" style={{ height: 30, objectFit: "contain" }} />
                <sp-2/>
              <f-cc>
                <f-15>UV Index:</f-15>
                <sp-3/>
                <f-15>{props.uv}</f-15>
                <sp-4/>
              </f-cc>
            </f-cc>


            <f-cc style={{ height: 80, width: 300, backgroundColor: "gainsboro", borderRadius: 15 }}>
              <img src="https://cdn.ituring.ir/research/71/books/win.png" style={{ height: 30, objectFit: "contain" }} />
                <sp-2/>
              <f-cc>
                <f-15>Pressure:</f-15>
                <sp-3/>
                <f-15>{props.pressure}</f-15>
                <sp-4/>
              </f-cc>
            </f-cc>
            

          </f-cse>
          <br-x/>


          <f-cse>
            <f-cc style={{ height: 80, width: 300, backgroundColor: "powderblue", borderRadius: 15 }}>
              <img src="https://cdn.ituring.ir/research/71/books/image/temp%20c.webp" style={{ height: 30, objectFit: "contain" }} />
                <sp-2/>
              <f-cc>
                <f-15>Feels Like:</f-15>
                <sp-3/>
                <f-15>{props.feelslikec}</f-15>
                <sp-4/>
                <f-15> º</f-15>
                <f-15> C</f-15>
              </f-cc>
            </f-cc>


            <f-cc style={{ height: 80, width: 300, backgroundColor: "powderblue", borderRadius: 15 }}>
              <img src="https://cdn.ituring.ir/research/71/-humidity3.png" style={{ height: 30, objectFit: "contain" }} />
                <sp-2/>
              <f-cc>
                <f-15>Humidity:</f-15>
                <sp-3/>
                <f-15>{props.humidity}</f-15>
                <sp-3/>
                <f-12 style={{fontSize:12}}> %</f-12>
                <sp-4/>
                <f-12 style={{fontSize:12}}> RH</f-12>
              </f-cc>
            </f-cc>
            

          </f-cse>
          <br-x/>


          <f-cse>
            <f-cc style={{ height: 80, width: 300, backgroundColor: "gainsboro", borderRadius: 15 }}>
              <img src="https://cdn.ituring.ir/research/71/books/eye2.png" style={{ height: 30, objectFit: "contain" }} />
                <sp-4/>
              <f-cc>
                <f-15>Visibility:</f-15>
                <sp-3/>
                <f-15>{props.visibility}</f-15>
                <sp-4/>
              </f-cc>
            </f-cc>


            <f-cc style={{ height: 80, width: 300, backgroundColor: "gainsboro", borderRadius: 15 }}>
              <img src="https://cdn.ituring.ir/research/71/books/cloud.png" style={{ height: 30, objectFit: "contain"}} />
                <sp-2/>
              <f-cc>
                <f-15 >Cloud Cover:</f-15>
                <sp-3/>
                <f-15>{props.cloud}</f-15>
                <sp-4/>
              </f-cc>
            </f-cc>
            

          </f-cse>

          <br-x/>
          <br-x/>
          <br-x/>
          <br-x/>
          <br-x/>
          <br-x/>
          <f-cc style={{width:"100%", backgroundColor:'#C69B64' }}>
            <f-13>تهیه شده توسط تیم پژوهشی تورینگ</f-13>
          </f-cc>

        </c-x>


        {/* <div style={{ direction: 'ltr', fontSize: 25 }}>
            <span>Feels like: {props.feelslikec} °C</span>
           <br />
           <span>Humidity: {props.humidity} % RH</span>
           <br />
           <span>Pressure: {props.pressure}</span>
           <br />
           <span>Server date: {props.date}</span>
         </div>  */}
      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

  let data = await (await fetch("https://cdn.ituring.ir/research/api/weather")).json()

  let feelslikec = data.current_condition[0].FeelsLikeC
  let humidity = data.current_condition[0].humidity
  let pressure = data.current_condition[0].pressure
  let uv = data.current_condition[0].uvIndex
  let visibility = data.current_condition[0].visibility
  let cloud = data.current_condition[0].cloudcover
  let date = new Date().toLocaleTimeString()

  return {
    props: {
      data: global.QSON.stringify({
        session,
        feelslikec,
        humidity,
        pressure,
        date,
        uv,
        visibility,
        cloud,
        // nlangs,
      })
    },
  }
}