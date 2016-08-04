port module Browser exposing (..)
{-| TodoMVC implemented in Elm, using plain HTML and CSS for rendering.
This application is broken up into three key parts:
  1. Model  - a full definition of the application's state
  2. Update - a way to step the application state forward
  3. View   - a way to visualize our application state with HTML
This clean division of concerns is a core part of Elm. You can read more about
this in <http://guide.elm-lang.org/architecture/index.html>
-}

import Html exposing (..)
import Html.App as App
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Html.Keyed as Keyed
import Html.Lazy exposing (lazy, lazy2)
import Json.Decode as Json
import String



main : Program (Maybe Model)
main =
  App.programWithFlags
    { init = init
    , view = view
    , update = updateWithStorage
    , subscriptions = \_ -> Sub.none
    }


port setStorage : Model -> Cmd msg

port focus : String -> Cmd msg


{-| We want to `setStorage` on every update. This function adds the setStorage
command for every step of the update function.
-}
updateWithStorage : Msg -> Model -> (Model, Cmd Msg)
updateWithStorage msg model =
  let
    (newModel, cmds) =
      update msg model
  in
    ( newModel
    , Cmd.batch [ setStorage newModel, cmds ]
    )



-- MODEL


-- The full application state of our todo app.
type alias Model =
    { url : String
    , viewing : String
    }


emptyModel : Model
emptyModel =
  { url = "http://reedrosenbluth.com"
  , viewing = "http://reedrosenbluth.com"
  }


init : Maybe Model -> ( Model, Cmd Msg )
init savedModel =
  Maybe.withDefault emptyModel savedModel ! []



-- UPDATE


type Msg
    = NoOp
    | UpdateUrl String
    | UpdateViewing String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
    NoOp ->
      model ! []

    UpdateUrl str ->
      { model | url = str }
        ! []

    UpdateViewing str ->
      { model | viewing = str }
        ! []


-- VIEW


view : Model -> Html Msg
view model =
  div
    [ class "wrapper" ]
    [ div
        [ id "navbar" ]
        [ input
            [ id "url-input"
            , value model.url
            , onInput UpdateUrl
            , onEnter (UpdateViewing model.url)
            ] []
        ]
    , div
        [ id "webviews"]
        [ webview [ src model.viewing ] ]
    ]

webview : List (Attribute msg) -> Html msg
webview attributes =
    node "webview" attributes []

onEnter : Msg -> Attribute Msg
onEnter msg =
  let
    tagger code =
      if code == 13 then msg else NoOp
  in
    on "keydown" (Json.map tagger keyCode)
