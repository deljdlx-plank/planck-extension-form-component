<?php

namespace Planck\Extension\FormComponent\View\Component;

use Phi\HTML\Element\Div;
use Phi\HTML\Element\Input;
use Planck\Extension\FrontVendor\Package\FontAwesome;
use Planck\Extension\FrontVendor\Package\Tree;
use Planck\View\Component;

class TreeInput extends Component
{

    /**
     * @var Input
     */
    protected $input;


    /**
     * @var Div
     */
    protected $treeContainer;


    protected $sourceURL;


    public function __construct($tagName = 'div')
    {
        parent::__construct($tagName);

        $this->addFrontPackage(
            new Tree()
        );

        $this->addFrontPackage(
            new FontAwesome()
        );

        $this->input = new Input();
        $this->input->setAttribute('type', 'hidden');


        $this->treeContainer = new Div();
        $this->treeContainer->setAttribute('class', 'plk-tree-placeholder');
        //$this->treeContainer->css('font-size', '5em');

        $this->dom->addChild($this->input);
        $this->dom->addChild($this->treeContainer);


        $this->dom->setAttribute('class', 'plk-component plk-tree-input');


    }


    public function getInput()
    {
        return $this->input;
    }


    public function setSource($source)
    {
        $this->sourceURL = $source;
        $this->dom->setAttribute('data-source', $this->sourceURL);
        return $this;
    }


}

